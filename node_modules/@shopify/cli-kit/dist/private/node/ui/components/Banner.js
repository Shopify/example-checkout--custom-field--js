import useLayout from '../hooks/use-layout.js';
import { LinksContext } from '../contexts/LinksContext.js';
import { Box, Text } from 'ink';
import React, { useContext, useRef } from 'react';
function typeToColor(type) {
    return {
        success: 'green',
        error: 'red',
        warning: 'yellow',
        info: 'dim',
        external_error: 'red',
    }[type];
}
const Footnotes = () => {
    const linksContext = useContext(LinksContext);
    if (linksContext === null || linksContext.links.current === null) {
        return null;
    }
    const links = linksContext.links.current;
    const linkIds = Object.keys(links);
    return linkIds.length > 0 ? (React.createElement(Box, { marginBottom: 1, marginTop: -1, flexDirection: "column" }, linkIds.map((id) => (React.createElement(Text, { key: id }, `[${id}] ${links[id]?.url}`))))) : null;
};
const BoxWithBorder = ({ type, children }) => {
    const { twoThirds } = useLayout();
    const links = useRef({});
    return (React.createElement(LinksContext.Provider, { value: {
            links,
            addLink: (label, url) => {
                const id = Object.keys(links.current).find((id) => links.current[id].url === url);
                if (id) {
                    return id;
                }
                const newId = (Object.keys(links.current).length + 1).toString();
                links.current = {
                    ...links.current,
                    [newId]: { label, url },
                };
                return newId;
            },
        } },
        React.createElement(Box, { width: twoThirds, paddingY: 1, paddingX: 2, marginBottom: 1, borderStyle: "round", flexDirection: "column", borderColor: typeToColor(type) },
            React.createElement(Box, { marginTop: -2, marginBottom: 1, marginLeft: -1 },
                React.createElement(Text, null, ` ${type.replace(/_/g, ' ')} `)),
            children),
        React.createElement(Footnotes, null)));
};
const BoxWithTopBottomLines = ({ type, children }) => {
    const { twoThirds } = useLayout();
    // 2 initial dashes + 2 spaces surrounding the type
    let topLineAfterTypeLength = twoThirds - 2 - type.length - 2;
    if (topLineAfterTypeLength < 0)
        topLineAfterTypeLength = 0;
    return (React.createElement(Box, { flexDirection: "column", marginBottom: 1 },
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, null,
                React.createElement(Text, { color: typeToColor(type) }, '─'.repeat(2)),
                React.createElement(Text, null, ` ${type.replace(/_/g, ' ')} `),
                React.createElement(Text, { color: typeToColor(type) }, '─'.repeat(topLineAfterTypeLength)))),
        children,
        React.createElement(Box, { marginTop: 1 },
            React.createElement(Text, { color: typeToColor(type) }, '─'.repeat(twoThirds)))));
};
const Banner = ({ children, ...props }) => {
    if (props.type === 'external_error') {
        return React.createElement(BoxWithTopBottomLines, props, children);
    }
    else {
        return React.createElement(BoxWithBorder, props, children);
    }
};
export { Banner };
//# sourceMappingURL=Banner.js.map