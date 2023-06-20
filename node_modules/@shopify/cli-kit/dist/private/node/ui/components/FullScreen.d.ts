import { FunctionComponent } from 'react';
/**
 * `FullScreen` renders all output in a new buffer and makes it full screen. This is useful when:
 * - You want to preserve terminal history. `ink` [normally clears the terminal history](https://github.com/vadimdemedes/ink/issues/382) if the rendered output is taller than the terminal window. By rendering in a separate buffer history will be preserved and will be visible after pressing `Ctrl+C`.
 * - You want to respond to the resize event of the terminal. Whenever the user resizes their terminal window the output's height and width will be recalculated and re-rendered properly.
 */
declare const FullScreen: FunctionComponent;
export { FullScreen };
