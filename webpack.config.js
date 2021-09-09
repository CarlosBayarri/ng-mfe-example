const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const share = mf.share;



module.exports = {
  output: {
    uniqueName: "mfe1",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './src/app/app.module.ts',
        },
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '12.2.4' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '12.2.4' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '12.2.4' },
        })
    })
  ]
};
