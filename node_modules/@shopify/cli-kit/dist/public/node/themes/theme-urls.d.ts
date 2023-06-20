import { Theme } from '@shopify/cli-kit/node/themes/models/theme';
import { AdminSession } from '@shopify/cli-kit/node/session';
export declare function themePreviewUrl(theme: Theme, session: AdminSession): string;
export declare function themeEditorUrl(theme: Theme, session: AdminSession): string;
export declare function storeAdminUrl(session: AdminSession): string;
