import { AlertProps } from './components/Alert.js';
import { RenderOptions } from 'ink';
export interface AlertOptions extends AlertProps {
    renderOptions?: RenderOptions;
}
export declare function alert({ type, headline, body, nextSteps, reference, link, customSections, orderedNextSteps, renderOptions, }: AlertOptions): string | undefined;
