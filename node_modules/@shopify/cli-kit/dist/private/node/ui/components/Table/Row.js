import { Box, Text } from 'ink';
import React from 'react';
function join(elements, separator) {
    return elements.reduce((elements, element, index) => {
        if (elements.length === 0) {
            return [element];
        }
        return [...elements, separator(index), element];
    }, []);
}
const Row = ({ rowKey, columns, data, fillerChar, ignoreColumnColor }) => {
    return (React.createElement(Box, { flexDirection: "row" }, ...join(columns.map((column) => {
        const content = data[column.name];
        const key = `${rowKey}-cell-${column.name.toString()}`;
        const marginRight = column.width - String(content ?? '').length;
        return (React.createElement(Text, { key: key, color: ignoreColumnColor ? undefined : column.color },
            content,
            fillerChar.repeat(marginRight)));
    }), (index) => {
        const key = `${rowKey}-horizontal-separator-${index}`;
        return React.createElement(Text, { key: key }, '  ');
    })));
};
export { Row };
//# sourceMappingURL=Row.js.map