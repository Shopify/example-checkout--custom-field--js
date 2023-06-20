import { Row } from './Row.js';
import React from 'react';
import { Box } from 'ink';
// eslint-disable-next-line react/function-component-definition
function Table({ rows, columns: columnsConfiguration }) {
    const columns = Object.entries(columnsConfiguration).map(([key, { header, color }]) => {
        const headerWidth = String(header || key).length;
        const columnWidths = rows.map((row) => {
            const value = row[key];
            if (value === undefined || value === null) {
                return 0;
            }
            return String(value).length;
        });
        return {
            name: key,
            width: Math.max(...columnWidths, headerWidth),
            color,
        };
    });
    const headings = Object.entries(columnsConfiguration).reduce((headings, [column, { header }]) => ({ ...headings, [column]: header || column }), {});
    return (React.createElement(Box, { flexDirection: "column" },
        React.createElement(Row, { rowKey: "heading", fillerChar: " ", columns: columns, data: headings, ignoreColumnColor: true }),
        React.createElement(Row, { rowKey: "separator", fillerChar: "\u2500", columns: columns, data: {}, ignoreColumnColor: true }),
        rows.map((row, index) => {
            const key = `row-${index}`;
            return (React.createElement(Box, { flexDirection: "column", key: key },
                React.createElement(Row, { rowKey: `data-${key}`, fillerChar: " ", columns: columns, data: row })));
        })));
}
export { Table };
//# sourceMappingURL=Table.js.map