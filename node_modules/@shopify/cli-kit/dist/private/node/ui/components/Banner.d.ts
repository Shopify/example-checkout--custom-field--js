import { FunctionComponent } from 'react';
export type BannerType = 'success' | 'error' | 'warning' | 'info' | 'external_error';
interface BannerProps {
    type: BannerType;
}
declare const Banner: FunctionComponent<BannerProps>;
export { Banner };
