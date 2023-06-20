/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { IncomingDispatchMessage, OutgoingDispatchMessage, SetupWebSocketConnectionOptions } from './models.js';
import { RawData, WebSocket, WebSocketServer } from 'ws';
import { IncomingMessage } from 'http';
import { Duplex } from 'stream';
export declare function websocketUpgradeHandler(wss: WebSocketServer, options: SetupWebSocketConnectionOptions): (req: IncomingMessage, socket: Duplex, head: Buffer) => void;
export declare function getConnectionDoneHandler(wss: WebSocketServer, options: SetupWebSocketConnectionOptions): (ws: WebSocket) => void;
export declare function getOnMessageHandler(wss: WebSocketServer, options: SetupWebSocketConnectionOptions): (data: RawData) => void;
export declare function getPayloadUpdateHandler(wss: WebSocketServer, options: SetupWebSocketConnectionOptions): (extensionIds: string[]) => void;
export declare function getOutgoingDispatchMessage(incomingMessage: IncomingDispatchMessage, options: SetupWebSocketConnectionOptions): OutgoingDispatchMessage;
