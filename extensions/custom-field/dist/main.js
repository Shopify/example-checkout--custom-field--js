(() => {
  // node_modules/@shopify/checkout-ui-extensions/build/esm/extend.mjs
  var extend = (...args) => self.shopify.extend(...args);

  // node_modules/@shopify/checkout-ui-extensions/node_modules/@remote-ui/core/build/esm/component.mjs
  function createRemoteComponent(componentType) {
    return componentType;
  }

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/BlockStack/BlockStack.mjs
  var BlockStack = createRemoteComponent("BlockStack");

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/Checkbox/Checkbox.mjs
  var Checkbox = createRemoteComponent("Checkbox");

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/TextField/TextField.mjs
  var TextField = createRemoteComponent("TextField");

  // extensions/custom-fields-js/src/index.js
  extend("Checkout::ShippingMethods::RenderAfter", (root, api) => {
    const state = {
      metafields: api.metafields.current,
      showDeliveryInstructions: false
    };
    renderUI({ root, api, state });
    api.metafields.subscribe((newMetafields) => {
      state.metafields = newMetafields;
      renderUI({ root, api, state });
    });
  });
  function renderUI({ root, api, state }) {
    var _a;
    const { applyMetafieldChange } = api;
    for (const child of root.children) {
      root.removeChild(child);
    }
    const metafieldNamespace = "yourAppNamespace";
    const metafieldKey = "deliveryInstructions";
    const deliveryInstructions = (_a = state.metafields) == null ? void 0 : _a.find(
      (field) => field.namespace === metafieldNamespace && field.key === metafieldKey
    );
    const app = root.createComponent(BlockStack, {}, [
      root.createComponent(
        Checkbox,
        {
          checked: state.showDeliveryInstructions,
          onChange: () => {
            state.showDeliveryInstructions = !state.showDeliveryInstructions;
            renderUI({ root, api, state });
          }
        },
        "Provide delivery instructions"
      )
    ]);
    if (state.showDeliveryInstructions) {
      app.appendChild(
        root.createComponent(TextField, {
          multiline: 3,
          label: "Delivery instructions",
          // [START custom-field.store-value]
          onChange: (value) => {
            applyMetafieldChange({
              type: "updateMetafield",
              namespace: metafieldNamespace,
              key: metafieldKey,
              valueType: "string",
              value
            });
          },
          // [END custom-field.store-value]
          value: deliveryInstructions == null ? void 0 : deliveryInstructions.value
        })
      );
    }
    root.appendChild(app);
  }
})();
