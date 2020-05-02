let webpack = require('webpack');
let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let webpackBase = require('./webpack.base.config');
let webpackMerge = require('webpack-merge');
let options = {
    cdn: '',
    dist: 'sample/dist',
    root: __dirname,
    src: './src'
}
var config = webpackMerge(webpackBase(options), {
    mode: 'development',
    entry: {
        'index': path.resolve(options.root, 'sample', 'index.ts'),
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        contentBase: './sample',
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             styles: {
    //                 name: 'styles',
    //                 test: /\.less$|\.css$/,
    //                 chunks: 'all',
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
    externals: [
        {
            // 'react': 'React',
            // 'react-dom': 'ReactDOM',
            // 'react-redux': 'ReactRedux',
            // 'redux': 'Redux',
            // 'immutable': 'Immutable',
            'jquery': 'jQuery',
            // 'esprima-fb': 'esprima',
            // 'draft-js': 'Draft',
            // 'lodash': '_',
            // 'react-router-dom': 'ReactRouterDOM'
        },
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            template:path.resolve(options.root,'sample/tmp.html'),
            title: '属性编辑器',            
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new BundleAnalyzerPlugin({
            analyzerPort: 9999
        })
    ],
    devtool: 'inline-source-map',
});

console.log(config)
module.exports = config;
