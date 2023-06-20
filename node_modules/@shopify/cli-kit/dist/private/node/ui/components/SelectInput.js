import { isEqual } from '../../../../public/common/lang.js';
import { debounce } from '../../../../public/common/function.js';
import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import { Box, useInput, Text } from 'ink';
import chalk from 'chalk';
import figures from 'figures';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
function rotateArray(array, rotation) {
    const arrayCopy = array.slice();
    return arrayCopy.splice(-(rotation ?? 0) % arrayCopy.length).concat(arrayCopy);
}
function highlightedLabel(label, term) {
    if (!term) {
        return label;
    }
    const regex = new RegExp(term, 'i');
    return label.replace(regex, (match) => {
        return chalk.bold(match);
    });
}
// eslint-disable-next-line react/function-component-definition
function Item({ item, previousItem, selectedIndex, highlightedTerm, enableShortcuts, items, hasAnyGroup, }) {
    const isSelected = items.indexOf(item) === selectedIndex;
    const label = highlightedLabel(item.label, highlightedTerm);
    let title;
    if (typeof previousItem === 'undefined' || item.group !== previousItem.group) {
        title = item.group ?? (hasAnyGroup ? 'Other' : undefined);
    }
    return (React.createElement(Box, { key: item.key, flexDirection: "column", marginTop: items.indexOf(item) !== 0 && title ? 1 : 0 },
        title ? (React.createElement(Box, { marginLeft: 3 },
            React.createElement(Text, { bold: true }, title))) : null,
        React.createElement(Box, { key: item.key },
            React.createElement(Box, { marginRight: 2 }, isSelected ? React.createElement(Text, { color: "cyan" }, `>`) : React.createElement(Text, null, " ")),
            React.createElement(Text, { color: isSelected ? 'cyan' : undefined }, enableShortcuts ? `(${item.key}) ${label}` : label))));
}
// eslint-disable-next-line react/function-component-definition
function SelectInputInner({ items: initialItems, onChange, enableShortcuts = true, focus = true, emptyMessage = 'No items to select.', defaultValue, highlightedTerm, loading = false, errorMessage, hasMorePages = false, morePagesMessage, infoMessage, limit, }, ref) {
    const sortBy = require('lodash/sortBy');
    const hasAnyGroup = initialItems.some((item) => typeof item.group !== 'undefined');
    const items = sortBy(initialItems, 'group');
    const itemsWithKeys = items.map((item, index) => ({
        ...item,
        key: item.key ?? (index + 1).toString(),
    }));
    const defaultValueIndex = defaultValue ? items.findIndex((item) => item.value === defaultValue.value) : -1;
    const initialIndex = defaultValueIndex === -1 ? 0 : defaultValueIndex;
    const hasLimit = typeof limit !== 'undefined' && items.length > limit;
    const inputStack = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(initialIndex);
    const [rotateIndex, setRotateIndex] = useState(0);
    const slicedItemsWithKeys = hasLimit ? rotateArray(itemsWithKeys, rotateIndex).slice(0, limit) : itemsWithKeys;
    const previousItems = useRef(undefined);
    const changeSelection = useCallback(({ newSelectedIndex, newRotateIndex, usedShortcut = false, }) => {
        setSelectedIndex(newSelectedIndex);
        if (typeof newRotateIndex !== 'undefined')
            setRotateIndex(newRotateIndex);
        const rotatedItems = hasLimit ? rotateArray(items, newRotateIndex).slice(0, limit) : items;
        onChange({
            item: rotatedItems[newSelectedIndex],
            usedShortcut,
        });
    }, [hasLimit, items, limit, onChange]);
    useEffect(() => {
        if (items.length === 0) {
            // reset selection when items are empty
            onChange({
                item: undefined,
                usedShortcut: false,
            });
            // reset index when items change or the first time
        }
        else if (!previousItems.current) {
            changeSelection({ newSelectedIndex: initialIndex, newRotateIndex: 0 });
        }
        else if (!isEqual(previousItems.current.map((item) => item.value), items.map((item) => item.value))) {
            changeSelection({ newSelectedIndex: 0, newRotateIndex: 0 });
        }
        previousItems.current = items;
    }, [changeSelection, initialIndex, items, onChange]);
    const handleArrows = (key) => {
        if (key.upArrow) {
            const lastIndex = items.length - 1;
            const atFirstIndex = selectedIndex === 0;
            const nextIndex = hasLimit ? selectedIndex : lastIndex;
            const nextRotateIndex = atFirstIndex ? rotateIndex + 1 : rotateIndex;
            const nextSelectedIndex = atFirstIndex ? nextIndex : selectedIndex - 1;
            changeSelection({ newSelectedIndex: nextSelectedIndex, newRotateIndex: nextRotateIndex });
        }
        else if (key.downArrow) {
            const atLastIndex = selectedIndex === (hasLimit ? limit : items.length) - 1;
            const nextIndex = hasLimit ? selectedIndex : 0;
            const nextRotateIndex = atLastIndex ? rotateIndex - 1 : rotateIndex;
            const nextSelectedIndex = atLastIndex ? nextIndex : selectedIndex + 1;
            changeSelection({ newSelectedIndex: nextSelectedIndex, newRotateIndex: nextRotateIndex });
        }
    };
    const handleShortcuts = useCallback((input) => {
        if (slicedItemsWithKeys.map((item) => item.key).includes(input)) {
            const itemWithKey = slicedItemsWithKeys.find((item) => item.key === input);
            if (itemWithKey !== undefined) {
                changeSelection({
                    newSelectedIndex: items.findIndex((item) => item.value === itemWithKey.value),
                    usedShortcut: true,
                });
            }
        }
    }, [changeSelection, items, slicedItemsWithKeys]);
    // disable exhaustive-deps because we want to memoize the debounce function itself
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceHandleShortcuts = useCallback(debounce((newInputStack) => {
        handleShortcuts(newInputStack);
        inputStack.current = null;
    }, 300), [handleShortcuts]);
    useInput((input, key) => {
        // check that no special modifier (shift, control, etc.) is being pressed
        if (enableShortcuts && input.length > 0 && Object.values(key).every((value) => value === false)) {
            const newInputStack = inputStack.current === null ? input : inputStack.current + input;
            inputStack.current = newInputStack;
            debounceHandleShortcuts(newInputStack);
        }
        else {
            debounceHandleShortcuts.cancel();
            inputStack.current = null;
            handleArrows(key);
        }
    }, { isActive: focus });
    if (loading) {
        return (React.createElement(Box, { marginLeft: 3 },
            React.createElement(Text, { dimColor: true }, "Loading...")));
    }
    else if (errorMessage && errorMessage.length > 0) {
        return (React.createElement(Box, { marginLeft: 3 },
            React.createElement(Text, { color: "red" }, errorMessage)));
    }
    else if (items.length === 0) {
        return (React.createElement(Box, { marginLeft: 3 },
            React.createElement(Text, { dimColor: true }, emptyMessage)));
    }
    else {
        return (React.createElement(Box, { flexDirection: "column", ref: ref },
            slicedItemsWithKeys.map((item, index) => (React.createElement(Item, { key: item.key, item: item, previousItem: slicedItemsWithKeys[index - 1], highlightedTerm: highlightedTerm, selectedIndex: selectedIndex, items: slicedItemsWithKeys, enableShortcuts: enableShortcuts, hasAnyGroup: hasAnyGroup }))),
            React.createElement(Box, { marginTop: 1, marginLeft: 3, flexDirection: "column" },
                hasMorePages ? (React.createElement(Text, null,
                    React.createElement(Text, { bold: true },
                        "1-",
                        items.length,
                        " of many"),
                    morePagesMessage ? `  ${morePagesMessage}` : null)) : null,
                hasLimit ? React.createElement(Text, { dimColor: true }, `Showing ${limit} of ${items.length} items.`) : null,
                React.createElement(Text, { dimColor: true }, infoMessage
                    ? infoMessage
                    : `Press ${figures.arrowUp}${figures.arrowDown} arrows to select, enter to confirm`))));
    }
}
export const SelectInput = forwardRef(SelectInputInner);
//# sourceMappingURL=SelectInput.js.map