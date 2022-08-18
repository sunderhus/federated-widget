const { defineConfig } = require("@vue/cli-service");
const { container: { ModuleFederationPlugin } } = require('webpack')

module.exports = defineConfig({
    publicPath: 'auto',
    transpileDependencies: true,
    configureWebpack: {
        optimization: {
            splitChunks: false,
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'widgetFeedback',
                filename: 'remoteEntry.js',
                exposes: {
                    './Widget': './src/components/widget/index.vue',
                    './mountWidget': './src/components/widget/create-widget',
                },
                remotes: {},
                shared: {
                },
            })
        ]
    }
});
