import { FatalError as Fatal } from '../../../../public/node/error.js';
import { FunctionComponent } from 'react';
export interface FatalErrorProps {
    error: Fatal;
}
declare const FatalError: FunctionComponent<FatalErrorProps>;
export { FatalError };
