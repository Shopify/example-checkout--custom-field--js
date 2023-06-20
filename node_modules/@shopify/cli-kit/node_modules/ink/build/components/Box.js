/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { forwardRef } from 'react';
/**
 * `<Box>` is an essential Ink component to build your layout. It's like `<div style="display: flex">` in the browser.
 */
const Box = forwardRef(({ children, ...style }, ref) => {
    const transformedStyle = {
        ...style,
        marginLeft: style.marginLeft || style.marginX || style.margin || 0,
        marginRight: style.marginRight || style.marginX || style.margin || 0,
        marginTop: style.marginTop || style.marginY || style.margin || 0,
        marginBottom: style.marginBottom || style.marginY || style.margin || 0,
        paddingLeft: style.paddingLeft || style.paddingX || style.padding || 0,
        paddingRight: style.paddingRight || style.paddingX || style.padding || 0,
        paddingTop: style.paddingTop || style.paddingY || style.padding || 0,
        paddingBottom: style.paddingBottom || style.paddingY || style.padding || 0
    };
    return (React.createElement("ink-box", { ref: ref, style: transformedStyle }, children));
});
Box.displayName = 'Box';
Box.defaultProps = {
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 1
};
export default Box;
//# sourceMappingURL=Box.js.map