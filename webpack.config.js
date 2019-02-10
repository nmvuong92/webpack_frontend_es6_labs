const path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['./src/index.js','./src/styles/index.scss'],
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
          },
          {
            test:/\.(s*)css$/,
            exclude: /node_modules/,
            use: ['style-loader','css-loader', 'sass-loader']
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
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
}