const path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
    },
    devServer: {
        inline:true,
        port: 8008,
        historyApiFallback: {
            index: 'public/index.html'
        }
    },
}