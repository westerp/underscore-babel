const path = require('path');

module.exports = {
    entry: 'app',
    module: {
        loaders: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ejs-loader',
                        query: {
                            variable: 'o',
                        }
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        sourceMapFilename: '[file].map',
    },
    resolve: {
        modules: [
            __dirname,
            'node_modules',
        ],
    },
    devtool: 'source-map',
    plugins: [],
};
