const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe1',

  exposes: {
    './MicrofrontendFirstModule': './src/app/microfrontend-first.module.ts',
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },
});
