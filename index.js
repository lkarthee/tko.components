//
// Export the Components
//
// ko.bindingHandlers.component
//

import bindingHandler from 'src/componentBinding';
import registry from './src/loaderRegistry';
import elements from './src/customElements';
import loader from './src/defaultLoader';


export default {
    // -- Registry --
    get: registry.get,
    loaders: registry.loaders,
    clearCachedDefinition: registry.clearCachedDefinition,

    // -- Loader --
    register: loader.register,
    isRegistered: loader.isRegistered,
    unregister: loader.unregister,
    defaultLoader: loader.defaultLoader,
    // Privately expose the underlying config registry for use in old-IE shim
    _allRegisteredComponents: loader.defaultConfigRegistry,

    // -- Custom elements --
    addBindingsForCustomElement: elements.addBindingsForCustomElement,
    getComponentNameForNode: elements.getComponentNameForNode,

    // -- Binding handler --
    bindingHandler: bindingHandler
};
