import { Command } from './Command.js';
import { Link } from './Link.js';
import { List } from './List.js';
import { UserInput } from './UserInput.js';
import { FilePath } from './FilePath.js';
import { Subdued } from './Subdued.js';
import { Box, Text } from 'ink';
import React from 'react';
function tokenToBlock(token) {
    return {
        display: typeof token !== 'string' && 'list' in token ? 'block' : 'inline',
        value: token,
    };
}
export function tokenItemToString(token) {
    if (typeof token === 'string') {
        return token;
    }
    else if ('command' in token) {
        return token.command;
    }
    else if ('link' in token) {
        return token.link.label || token.link.url;
    }
    else if ('char' in token) {
        return token.char;
    }
    else if ('userInput' in token) {
        return token.userInput;
    }
    else if ('subdued' in token) {
        return token.subdued;
    }
    else if ('filePath' in token) {
        return token.filePath;
    }
    else if ('list' in token) {
        return token.list.items.map(tokenItemToString).join(' ');
    }
    else if ('bold' in token) {
        return token.bold;
    }
    else {
        return token
            .map((item, index) => {
            if (index !== 0 && !(typeof item !== 'string' && 'char' in item)) {
                return ` ${tokenItemToString(item)}`;
            }
            else {
                return tokenItemToString(item);
            }
        })
            .join('');
    }
}
export function appendToTokenItem(token, suffix) {
    return Array.isArray(token) ? [...token, { char: suffix }] : [token, { char: suffix }];
}
function splitByDisplayType(acc, item) {
    if (item.display === 'block') {
        acc.push([item]);
    }
    else {
        const last = acc[acc.length - 1];
        if (last && last[0].display === 'inline') {
            last.push(item);
        }
        else {
            acc.push([item]);
        }
    }
    return acc;
}
const InlineBlocks = ({ blocks }) => {
    return (React.createElement(Text, null, blocks.map((block, blockIndex) => (React.createElement(Text, { key: blockIndex },
        blockIndex !== 0 && !(typeof block.value !== 'string' && 'char' in block.value) && React.createElement(Text, null, " "),
        React.createElement(TokenizedText, { item: block.value }))))));
};
/**
 * `TokenizedText` renders a text string with tokens that can be either strings,
 * links, and commands.
 */
const TokenizedText = ({ item }) => {
    if (typeof item === 'string') {
        return React.createElement(Text, null, item);
    }
    else if ('command' in item) {
        return React.createElement(Command, { command: item.command });
    }
    else if ('link' in item) {
        return React.createElement(Link, { ...item.link });
    }
    else if ('char' in item) {
        return React.createElement(Text, null, item.char[0]);
    }
    else if ('userInput' in item) {
        return React.createElement(UserInput, { userInput: item.userInput });
    }
    else if ('subdued' in item) {
        return React.createElement(Subdued, { subdued: item.subdued });
    }
    else if ('filePath' in item) {
        return React.createElement(FilePath, { filePath: item.filePath });
    }
    else if ('list' in item) {
        return React.createElement(List, { ...item.list });
    }
    else if ('bold' in item) {
        return React.createElement(Text, { bold: true }, item.bold);
    }
    else {
        const groupedItems = item.map(tokenToBlock).reduce(splitByDisplayType, []);
        return groupedItems.length === 1 && groupedItems[0].every((item) => item.display === 'inline') ? (React.createElement(InlineBlocks, { blocks: groupedItems[0] })) : (React.createElement(Box, { flexDirection: "column" }, groupedItems.map((items, groupIndex) => {
            if (items[0].display === 'inline') {
                return React.createElement(InlineBlocks, { blocks: items, key: groupIndex });
            }
            else {
                return React.createElement(List, { key: groupIndex, ...items[0].value.list });
            }
        })));
    }
};
export { TokenizedText };
//# sourceMappingURL=TokenizedText.js.map