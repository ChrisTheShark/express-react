'use strict';
const Path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      Path.resolve(__dirname, 'public/js/app.js')
    ],
    output: {
        path: Path.resolve(__dirname, 'public/dist/js'),
        filename: 'bundle.js'
    },
    devServer: {
      publicPath: 'http://localhost:3000/public/dist/js/',
      port: 3000
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }]
    }
};
