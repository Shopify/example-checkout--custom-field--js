import {
  extension,
  TextField,
  BlockStack,
  Checkbox,
} from "@shopify/ui-extensions/checkout";
// [START custom-field.ext-index]
// Set the entry point for the extension
export default extension("purchase.checkout.shipping-option-list.render-after", (root, api) => {
// [END custom-field.ext-index]
  // Keep track of the UI state
  const state = {
    metafields: api.metafields.current,
    showDeliveryInstructions: false,
  };

  // Render the initial extension UI
  renderUI({ root, api, state });
 // [START custom-field.define-metafield]
  // Keep track if metafields change. If they do, then re-render.
  api.metafields.subscribe((newMetafields) => {
    state.metafields = newMetafields;
    renderUI({ root, api, state });
  });
});
// [END custom-field.define-metafield]

function renderUI({ root, api, state }) {
  const { applyMetafieldChange, target } = api;

  // Guard against duplicate rendering of `shipping-option-list.render-after` target for one-time purchase and subscription sections. Calling `applyMetafieldsChange()` on the same namespace-key pair from duplicated extensions would otherwise cause an overwrite of the metafield value.
  // Instead of guarding, another approach would be to prefix the metafield key when calling `applyMetafieldsChange()`. The `deliveryGroupList`'s `groupType` could be used to such effect.
  if (target.current.groupType !== 'oneTimePurchase') {
    return null;
  }

  // In case this is a re-render, then remove all previous children
  for (const child of root.children) {
    root.removeChild(child);
  }

  // Define the metafield namespace and key
  const metafieldNamespace = "yourAppNamespace";
  const metafieldKey = "deliveryInstructions";

  // Get a reference to the metafield
  const deliveryInstructions = state.metafields?.find(
    (field) =>
      field.namespace === metafieldNamespace && field.key === metafieldKey
  );
  // [START custom-field.instruction-ui]
  // Create the Checkbox component
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

  // If the Checkbox component is selected, then create a TextField component
  if (state.showDeliveryInstructions) {
    app.appendChild(
      root.createComponent(TextField, {
        multiline: 3,
        label: "Delivery instructions",
        // [START custom-field.store-value]
        onChange: (value) => {
          // Apply the change to the metafield
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

  // Render the extension components
  root.appendChild(app);
}
