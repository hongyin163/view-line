module.exports = function (api) {
    api.cache(true);

    const presets = [
        ["@babel/preset-env",{
            targets:{
                browsers:'last 2 versions,ie >= 9'
            },
            modules:false,
        }],
        "@babel/preset-typescript"
    ];
    const plugins = [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
    ];

    return {
        presets,
        plugins
    };
}
