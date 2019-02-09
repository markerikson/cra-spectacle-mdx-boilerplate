const path = require("path");

module.exports = function override(config, env) {

    // Allow absolute paths
    config.resolve.modules.push(path.resolve("src"));

    const reExampleFiles = /examples.+\.jsx?/;

    const [parser, preloadAppRule, mainAppRule] = config.module.rules;

    // Don't parse anything under a `/examples` subfolder
    preloadAppRule.exclude = reExampleFiles;

    // pull out the existing loaders
    const [
        urlLoader,
        appSrcLoader,
        nonSrcLoader,
        cssLoader,
        cssModuleLoader,
        sassLoader,
        sassCssModuleLoader,
        otherFilesLoader,
    ] = mainAppRule.oneOf;


    // don't handle MD/MDX files with the fallback file loader
    otherFilesLoader.exclude.push(/\.mdx?$/)

    mainAppRule.oneOf = [
        // Use raw-loader for any example files
        {
            loader: 'raw-loader',
            include : reExampleFiles
        },
        // Copy spectacle-boilerplate's handling for MD/MDX files
        {
            test: /\.md$/,
            loader: "html-loader!markdown-loader?gfm=false"
        },
        {
            test: /\.mdx$/,
            exclude: /node_modules/,
            use: [

                {
                    loader: "babel-loader" ,
                    options : {
                        babelrc: false,
                        configFile: false,
                        presets: [require.resolve('babel-preset-react-app')],
                    }
                },

                { loader: require.resolve('./mdx-loader.js') }
            ]
        },
        urlLoader,
        appSrcLoader,
        nonSrcLoader,
        cssLoader,
        otherFilesLoader,
    ];

    return config;
}