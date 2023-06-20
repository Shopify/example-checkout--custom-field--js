import { Theme } from './models/theme.js';
import { AdminSession } from '@shopify/cli-kit/node/session';
export type ThemeParams = Partial<Pick<Theme, 'name' | 'role'>>;
export declare function fetchTheme(id: number, session: AdminSession): Promise<Theme | undefined>;
export declare function fetchThemes(session: AdminSession): Promise<Theme[]>;
export declare function createTheme(params: ThemeParams, session: AdminSession): Promise<Theme | undefined>;
export declare function updateTheme(id: number, params: ThemeParams, session: AdminSession): Promise<Theme | undefined>;
export declare function publishTheme(id: number, session: AdminSession): Promise<Theme | undefined>;
export declare function deleteTheme(id: number, session: AdminSession): Promise<Theme | undefined>;
