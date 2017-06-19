/**
 * Created by eugene on 18.06.2017.
 */

var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty'
    }
};

