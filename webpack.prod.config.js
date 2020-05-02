let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let webpackBase = require('./webpack.base.config');
let webpackMerge = require('webpack-merge');
let options = {
    cdn: '',
    dist: 'dist',
    root: __dirname,
    src: './src'
}
var config = webpackMerge(webpackBase(options), {
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        library: 'ViewLine',
        libraryTarget: 'umd'
    },
    externals: [
        {
            'react': {
                commonjs: 'react',
                commonjs2: 'react',
                root: 'React'
            },
            'react-dom': {
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
                root: 'ReactDOM'
            },
            'react-redux': {
                commonjs: 'react-redux',
                commonjs2: 'react-redux',
                root: 'ReactRedux'
            },
            'redux': {
                commonjs: 'redux',
                commonjs2: 'redux',
                root: 'Redux'
            },
            'immutable': {
                commonjs: 'immutable',
                commonjs2: 'immutable',
                root: 'Immutable'
            },
            'jquery': {
                commonjs: 'jquery',
                commonjs2: 'jquery',
                root: 'jQuery'
            },
            'esprima-fb': {
                commonjs: 'esprima-fb',
                commonjs2: 'esprima-fb',
                root: 'esprima'
            }, 
            'draft-js': {
                commonjs: 'draft-js',
                commonjs2: 'draft-js',
                root: 'Draft'
            },
            'lodash': {
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_' // indicates global variable
            },
            'bondjs': 'bondjs',
            'react-router-dom': {
                commonjs: 'react-router-dom',
                commonjs2: 'react-router-dom',
                amd: 'react-router-dom',
                root: 'ReactRouterDOM' // indicates global variable
            },
            'prop-types': {
                commonjs: 'prop-types',
                commonjs2: 'prop-types',
                amd: 'prop-types',
                root: 'PropTypes' // indicates global variable
            },
            'tinycolor2': {
                commonjs: 'tinycolor2',
                commonjs2: 'tinycolor2',
                amd: 'tinycolor2',
                root: 'tinycolor2' // indicates global variable
            },
            'SketchPicker': {
                commonjs: 'SketchPicker',
                amd: 'SketchPicker',
                root: 'ReactRouterDOM' // indicates global variable
            },
            'react-color': {
                commonjs: 'react-color',
                commonjs2: 'react-color',
                amd: 'react-color',
                root: 'reactColor' // indicates global variable
            },
            'axios': {
                commonjs: 'axios',
                commonjs2: 'axios',
            },
            'add-dom-event-listener': {
                commonjs: 'add-dom-event-listener',
                commonjs2: 'add-dom-event-listener',
            },
            'glamor': {
                commonjs: 'glamor',
                commonjs2: 'glamor',
            }
        },
        /^antd/,
        /^jssha/,
        function (context, request, callback) {
            if (/antd/.test(request)) {
                return callback(null, 'commonjs ' + request);
            }
            callback();
        }
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerPort: 9999
        // })
    ],
    devtool: 'none'
});

module.exports = config;
