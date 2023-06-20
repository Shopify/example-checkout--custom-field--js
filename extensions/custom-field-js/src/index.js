import {
  extend,
  TextField,
  BlockStack,
  Checkbox,
} from "@shopify/checkout-ui-extensions";

// [START custom-field.ext-index]
extend("Checkout::ShippingMethods::RenderAfter", (root, api) => {
// [END custom-field.ext-index]
  const state = {
    metafields: api.metafields.current,
    showDeliveryInstructions: false,
  };

  renderUI({ root, api, state });

  api.metafields.subscribe((newMetafields) => {
    state.metafields = newMetafields;
    renderUI({ root, api, state });
  });
});

function renderUI({ root, api, state }) {
  const { applyMetafieldChange } = api;

  for (const child of root.children) {
    root.removeChild(child);
  }

  // [START custom-field.define-metafield]
  const metafieldNamespace = "yourAppNamespace";
  const metafieldKey = "deliveryInstructions";
  // [END custom-field.define-metafield]

  const deliveryInstructions = state.metafields?.find(
    (field) =>
      field.namespace === metafieldNamespace && field.key === metafieldKey
  );

  // [START custom-field.instruction-ui]
  const app = root.createComponent(BlockStack, {}, [
    root.createComponent(
      Checkbox,
      {
        checked: state.showDeliveryInstructions,
        onChange: () => {
          state.showDeliveryInstructions = !state.showDeliveryInstructions;
          renderUI({ root, api, state });
        },
      },
      "Provide delivery instructions"
    ),
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
            value,
          });
        },
        // [END custom-field.store-value]
        value: deliveryInstructions?.value,
      })
    );
  }
  // [END custom-field.instruction-ui]

  root.appendChild(app);
}