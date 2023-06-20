import { appendToTokenItem, tokenItemToString } from './components/TokenizedText.js';
export function messageWithPunctuation(message) {
    const messageToString = tokenItemToString(message);
    return messageToString.endsWith('?') || messageToString.endsWith(':') ? message : appendToTokenItem(message, ':');
}
//# sourceMappingURL=utilities.js.map