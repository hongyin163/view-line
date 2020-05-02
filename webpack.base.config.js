let path = require('path');
let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = function (options) {
    let {
        cdn,
        dist,
        root,
        src
    } = options;
    let publicPath = `${cdn}`;
    let distPath = path.resolve(root, dist);
    let def = {
        mode: 'development',
        entry: {
            'view-line': path.resolve(root, src, 'index.ts'),
        },
        output: {
            path: distPath,
            filename: '[name].js',
            chunkFilename: '[name].chunk.js',
            publicPath: publicPath,
            // library: 'PropsEditor',
            // libraryTarget: 'umd'
        },
        module: {
            rules: [
                // or any other compile-to-css language
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it use publicPath in webpackOptions.output
                                publicPath
                            }
                        },
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }, {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    '@primary-color': '#FB7055',
                                    '@border-radius-base': 0,
                                    '@border-radius-sm ': 0
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it use publicPath in webpackOptions.output
                                publicPath
                            }
                        },
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: 'img/[path][name].[ext]'
                        }
                    }]
                },
                {
                    test: /\.(eot|svg|ttf|woff)\??.*$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: 'iconfont/[name].[ext]'
                        }
                    }]
                }
            ]

        },
        node: {
            // Mock Node.js modules that Babel require()s but that we don't
            // particularly care about.
            fs: 'empty',
            module: 'empty',
            net: 'empty'
        },      
        cache: true,
        resolve: {
            alias: {
                '@': path.resolve(root, './src'),
            },
            extensions: ['.json', '.js', '.jsx','.ts','.tsx']
        },
        plugins: [
            // new webpack.IgnorePlugin({
            //     resourceRegExp: /^\.\/locale$/,
            //     contextRegExp: /moment$/
            // }),

        ]
    };
    return def;
};
