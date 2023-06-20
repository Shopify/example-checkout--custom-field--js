import { Text } from 'ink';
import React from 'react';
/**
 * `UserInput` displays some text that represents input from the user.
 * For example an answer to a selection prompt.
 */
const UserInput = ({ userInput }) => {
    return React.createElement(Text, { color: "cyan" }, userInput);
};
export { UserInput };
//# sourceMappingURL=UserInput.js.map