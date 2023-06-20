import { Text } from 'ink';
import React from 'react';
/**
 * `Command` displays a command as non-dimmed text.
 */
const Command = ({ command }) => {
    return React.createElement(Text, null,
        "`",
        command,
        "`");
};
export { Command };
//# sourceMappingURL=Command.js.map