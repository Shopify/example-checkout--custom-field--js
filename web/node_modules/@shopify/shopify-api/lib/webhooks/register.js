"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPLATE_MUTATION = exports.TEMPLATE_GET_HANDLERS = exports.register = void 0;
const tslib_1 = require("tslib");
const graphql_client_1 = require("../clients/graphql/graphql_client");
const error_1 = require("../error");
const logger_1 = require("../logger");
const types_1 = require("../types");
const registry_1 = require("./registry");
const query_template_1 = require("./query-template");
const types_2 = require("./types");
function register(config, webhookRegistry) {
    return function register({ session, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const log = (0, logger_1.logger)(config);
            log.info('Registering webhooks', { shop: session.shop });
            const registerReturn = Object.keys(webhookRegistry).reduce((acc, topic) => {
                acc[topic] = [];
                return acc;
            }, {});
            const existingHandlers = yield getExistingHandlers(config, session);
            log.debug(`Existing topics: [${Object.keys(existingHandlers).join(', ')}]`, { shop: session.shop });
            for (const topic in webhookRegistry) {
                if (!Object.prototype.hasOwnProperty.call(webhookRegistry, topic)) {
                    continue;
                }
                if (types_1.gdprTopics.includes(topic)) {
                    continue;
                }
                registerReturn[topic] = yield registerTopic({
                    config,
                    session,
                    topic,
                    existingHandlers: existingHandlers[topic] || [],
                    handlers: (0, registry_1.getHandlers)(webhookRegistry)(topic),
                });
                // Remove this topic from the list of existing handlers so we have a list of leftovers
                delete existingHandlers[topic];
            }
            // Delete any leftover handlers
            for (const topic in existingHandlers) {
                if (!Object.prototype.hasOwnProperty.call(existingHandlers, topic)) {
                    continue;
                }
                const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
                const client = new GraphqlClient({ session });
                registerReturn[topic] = yield runMutations({
                    config,
                    client,
                    topic,
                    handlers: existingHandlers[topic],
                    operation: types_2.WebhookOperation.Delete,
                });
            }
            return registerReturn;
        });
    };
}
exports.register = register;
function getExistingHandlers(config, session) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
        const client = new GraphqlClient({ session });
        const existingHandlers = {};
        let hasNextPage;
        let endCursor = null;
        do {
            const query = buildCheckQuery(endCursor);
            const response = yield client.query({
                data: query,
            });
            response.body.data.webhookSubscriptions.edges.forEach((edge) => {
                const handler = buildHandlerFromNode(edge);
                if (!existingHandlers[edge.node.topic]) {
                    existingHandlers[edge.node.topic] = [];
                }
                existingHandlers[edge.node.topic].push(handler);
            });
            endCursor = response.body.data.webhookSubscriptions.pageInfo.endCursor;
            hasNextPage = response.body.data.webhookSubscriptions.pageInfo.hasNextPage;
        } while (hasNextPage);
        return existingHandlers;
    });
}
function buildCheckQuery(endCursor) {
    return (0, query_template_1.queryTemplate)(exports.TEMPLATE_GET_HANDLERS, {
        END_CURSOR: JSON.stringify(endCursor),
    });
}
function buildHandlerFromNode(edge) {
    var _a, _b, _c;
    const endpoint = edge.node.endpoint;
    let handler;
    switch (endpoint.__typename) {
        case 'WebhookHttpEndpoint':
            handler = {
                deliveryMethod: types_2.DeliveryMethod.Http,
                privateMetafieldNamespaces: edge.node.privateMetafieldNamespaces,
                callbackUrl: endpoint.callbackUrl,
                // This is a dummy for now because we don't really care about it
                callback: () => tslib_1.__awaiter(this, void 0, void 0, function* () { }),
            };
            // This field only applies to HTTP webhooks
            (_a = handler.privateMetafieldNamespaces) === null || _a === void 0 ? void 0 : _a.sort();
            break;
        case 'WebhookEventBridgeEndpoint':
            handler = {
                deliveryMethod: types_2.DeliveryMethod.EventBridge,
                arn: endpoint.arn,
            };
            break;
        case 'WebhookPubSubEndpoint':
            handler = {
                deliveryMethod: types_2.DeliveryMethod.PubSub,
                pubSubProject: endpoint.pubSubProject,
                pubSubTopic: endpoint.pubSubTopic,
            };
            break;
    }
    // Set common fields
    handler.id = edge.node.id;
    handler.includeFields = edge.node.includeFields;
    handler.metafieldNamespaces = edge.node.metafieldNamespaces;
    // Sort the array fields to make them cheaper to compare later on
    (_b = handler.includeFields) === null || _b === void 0 ? void 0 : _b.sort();
    (_c = handler.metafieldNamespaces) === null || _c === void 0 ? void 0 : _c.sort();
    return handler;
}
function registerTopic({ config, session, topic, existingHandlers, handlers, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let registerResults = [];
        const { toCreate, toUpdate, toDelete } = categorizeHandlers(config, existingHandlers, handlers);
        const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
        const client = new GraphqlClient({ session });
        let operation = types_2.WebhookOperation.Create;
        registerResults = registerResults.concat(yield runMutations({ config, client, topic, operation, handlers: toCreate }));
        operation = types_2.WebhookOperation.Update;
        registerResults = registerResults.concat(yield runMutations({ config, client, topic, operation, handlers: toUpdate }));
        operation = types_2.WebhookOperation.Delete;
        registerResults = registerResults.concat(yield runMutations({ config, client, topic, operation, handlers: toDelete }));
        return registerResults;
    });
}
function categorizeHandlers(config, existingHandlers, handlers) {
    const handlersByKey = handlers.reduce((acc, value) => {
        acc[(0, registry_1.handlerIdentifier)(config, value)] = value;
        return acc;
    }, {});
    const existingHandlersByKey = existingHandlers.reduce((acc, value) => {
        acc[(0, registry_1.handlerIdentifier)(config, value)] = value;
        return acc;
    }, {});
    const toCreate = Object.assign({}, handlersByKey);
    const toUpdate = {};
    const toDelete = {};
    for (const existingKey in existingHandlersByKey) {
        if (!Object.prototype.hasOwnProperty.call(existingHandlersByKey, existingKey)) {
            continue;
        }
        const existingHandler = existingHandlersByKey[existingKey];
        const handler = handlersByKey[existingKey];
        if (existingKey in handlersByKey) {
            delete toCreate[existingKey];
            if (!areHandlerFieldsEqual(existingHandler, handler)) {
                toUpdate[existingKey] = handler;
                toUpdate[existingKey].id = existingHandler.id;
            }
        }
        else {
            toDelete[existingKey] = existingHandler;
        }
    }
    return {
        toCreate: Object.values(toCreate),
        toUpdate: Object.values(toUpdate),
        toDelete: Object.values(toDelete),
    };
}
function areHandlerFieldsEqual(arr1, arr2) {
    const includeFieldsEqual = arraysEqual(arr1.includeFields || [], arr2.includeFields || []);
    const metafieldNamespacesEqual = arraysEqual(arr1.metafieldNamespaces || [], arr2.metafieldNamespaces || []);
    const privateMetafieldNamespacesEqual = arr1.deliveryMethod !== types_2.DeliveryMethod.Http ||
        arr2.deliveryMethod !== types_2.DeliveryMethod.Http ||
        arraysEqual(arr1.privateMetafieldNamespaces || [], arr2.privateMetafieldNamespaces || []);
    return (includeFieldsEqual &&
        metafieldNamespacesEqual &&
        privateMetafieldNamespacesEqual);
}
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
function runMutations({ config, client, topic, handlers, operation, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const registerResults = [];
        for (const handler of handlers) {
            registerResults.push(yield runMutation({ config, client, topic, handler, operation }));
        }
        return registerResults;
    });
}
function runMutation({ config, client, topic, handler, operation, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let registerResult;
        (0, logger_1.logger)(config).debug(`Running webhook mutation`, { topic, operation });
        try {
            const query = buildMutation(config, topic, handler, operation);
            const result = yield client.query({ data: query });
            registerResult = {
                deliveryMethod: handler.deliveryMethod,
                success: isSuccess(result.body, handler, operation),
                result: result.body,
            };
        }
        catch (error) {
            if (error instanceof error_1.InvalidDeliveryMethodError) {
                registerResult = {
                    deliveryMethod: handler.deliveryMethod,
                    success: false,
                    result: { message: error.message },
                };
            }
            else {
                throw error;
            }
        }
        return registerResult;
    });
}
function buildMutation(config, topic, handler, operation) {
    const params = {};
    let identifier;
    if (handler.id) {
        identifier = `id: "${handler.id}"`;
    }
    else {
        identifier = `topic: ${topic}`;
    }
    const mutationArguments = {
        MUTATION_NAME: getMutationName(handler, operation),
        IDENTIFIER: identifier,
        MUTATION_PARAMS: '',
    };
    if (operation !== types_2.WebhookOperation.Delete) {
        switch (handler.deliveryMethod) {
            case types_2.DeliveryMethod.Http:
                params.callbackUrl = `"${(0, registry_1.addHostToCallbackUrl)(config, handler.callbackUrl)}"`;
                break;
            case types_2.DeliveryMethod.EventBridge:
                params.arn = `"${handler.arn}"`;
                break;
            case types_2.DeliveryMethod.PubSub:
                params.pubSubProject = `"${handler.pubSubProject}"`;
                params.pubSubTopic = `"${handler.pubSubTopic}"`;
                break;
            default:
                throw new error_1.InvalidDeliveryMethodError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
        }
        if (handler.includeFields) {
            params.includeFields = JSON.stringify(handler.includeFields);
        }
        if (handler.metafieldNamespaces) {
            params.metafieldNamespaces = JSON.stringify(handler.metafieldNamespaces);
        }
        if (handler.deliveryMethod === types_2.DeliveryMethod.Http &&
            handler.privateMetafieldNamespaces) {
            params.privateMetafieldNamespaces = JSON.stringify(handler.privateMetafieldNamespaces);
        }
        const paramsString = Object.entries(params)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
        mutationArguments.MUTATION_PARAMS = `webhookSubscription: {${paramsString}}`;
    }
    return (0, query_template_1.queryTemplate)(exports.TEMPLATE_MUTATION, mutationArguments);
}
function getMutationName(handler, operation) {
    switch (operation) {
        case types_2.WebhookOperation.Create:
            return `${getEndpoint(handler)}Create`;
        case types_2.WebhookOperation.Update:
            return `${getEndpoint(handler)}Update`;
        case types_2.WebhookOperation.Delete:
            return 'webhookSubscriptionDelete';
        default:
            throw new error_1.ShopifyError(`Unrecognized operation '${operation}'`);
    }
}
function getEndpoint(handler) {
    switch (handler.deliveryMethod) {
        case types_2.DeliveryMethod.Http:
            return 'webhookSubscription';
        case types_2.DeliveryMethod.EventBridge:
            return 'eventBridgeWebhookSubscription';
        case types_2.DeliveryMethod.PubSub:
            return 'pubSubWebhookSubscription';
        default:
            throw new error_1.ShopifyError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
    }
}
function isSuccess(result, handler, operation) {
    const mutationName = getMutationName(handler, operation);
    return Boolean(result.data &&
        result.data[mutationName] &&
        result.data[mutationName].userErrors.length === 0);
}
exports.TEMPLATE_GET_HANDLERS = `{
  webhookSubscriptions(
    first: 250,
    after: {{END_CURSOR}},
  ) {
    edges {
      node {
        id
        topic
        includeFields
        metafieldNamespaces
        privateMetafieldNamespaces
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
          ... on WebhookEventBridgeEndpoint {
            arn
          }
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}`;
exports.TEMPLATE_MUTATION = `
  mutation webhookSubscription {
    {{MUTATION_NAME}}(
      {{IDENTIFIER}},
      {{MUTATION_PARAMS}}
    ) {
      userErrors {
        field
        message
      }
    }
  }
`;
//# sourceMappingURL=register.js.map