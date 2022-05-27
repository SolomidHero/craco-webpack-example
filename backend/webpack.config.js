const path = require('path');

const WebpackObfuscator = require('webpack-obfuscator');
const nodeExternals = require('webpack-node-externals');

let config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'electron.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    target: 'electron-main',
    externalsPresets: {},
    externals: [nodeExternals({modulesDir: '../node_modules'})],
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: []
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.plugins.push(
            new WebpackObfuscator({
                compact: true,
                selfDefending: true,
                stringArray: true,
                stringArrayEncoding: ['rc4'],
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayIndexShift: true,
                stringArrayThreshold: 1,
                stringArrayWrappersCount: 2,
                stringArrayWrappersChainedCalls: true,
                stringArrayCallsTransform: true,
                stringArrayCallsTransformThreshold: 1,
                splitStrings: true,
                splitStringsChunkLength: 3,
                simplify: true
            })
        )
    }

    return config;
};