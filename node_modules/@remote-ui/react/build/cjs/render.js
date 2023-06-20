'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reconciler = require('./reconciler.js');
var context = require('./context.js');
var jsxRuntime = require('react/jsx-runtime');

const cache = new WeakMap(); // @see https://github.com/facebook/react/blob/993ca533b42756811731f6b7791ae06a35ee6b4d/packages/react-reconciler/src/ReactRootTags.js
// I think we are a legacy root?

const LEGACY_ROOT = 0;
function render(element, root, callback) {
  // First, check if we've already cached a container and render context for this root
  let cached = cache.get(root);

  if (!cached) {
    // Since we haven't created a container for this root yet, create a new one
    const value = {
      container: reconciler.reconciler.createContainer(root, LEGACY_ROOT, false, null),
      // We also cache the render context to avoid re-creating it on subsequent render calls
      renderContext: {
        root,
        reconciler: reconciler.reconciler
      }
    }; // Store the container and render context for retrieval on subsequent render calls

    cache.set(root, value);
    cached = value;
  }

  const {
    container,
    renderContext
  } = cached; // callback is cast here because the typings do not mark that argument
  // as optional, even though it is.

  reconciler.reconciler.updateContainer( /*#__PURE__*/jsxRuntime.jsx(context.RenderContext.Provider, {
    value: renderContext,
    children: element
  }), container, null, callback); // Did not work for me because (I think?) it is done by the worker
  // and therefore has an entirely different React.
  //
  // Original code was from:
  // @see https://github.com/facebook/react/issues/16666
  // @see https://github.com/michalochman/react-pixi-fiber/pull/148
  //
  // reconciler.injectIntoDevTools({
  //   bundleType: 1,
  //   findFiberByHostInstance: reconciler.findFiberByHostInstance,
  //   rendererPackageName: '@remote-ui/react',
  //   version: '16.9.0',
  // });
}

exports.render = render;
