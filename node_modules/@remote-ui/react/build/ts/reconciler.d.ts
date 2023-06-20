import reactReconciler, { Reconciler as ReactReconciler } from 'react-reconciler';
import type { RemoteRoot, RemoteText, RemoteComponent } from '@remote-ui/core';
declare type ViewInstance = RemoteComponent<any, any>;
declare type TextInstance = RemoteText<any>;
declare type SuspenseInstance = never;
declare type PublicInstance = unknown;
export declare type Reconciler = ReactReconciler<RemoteRoot, ViewInstance, TextInstance, SuspenseInstance, PublicInstance>;
export declare const reconciler: reactReconciler.Reconciler<RemoteRoot<any, true>, ViewInstance, TextInstance, never, unknown>;
export {};
//# sourceMappingURL=reconciler.d.ts.map