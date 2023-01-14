// config-overrides.js
const path = require('path');
const {override, addWebpackAlias} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = override(
    rewireReactHotLoader,
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, "src", "components"),
    })
);
