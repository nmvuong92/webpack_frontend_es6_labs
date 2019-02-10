const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: ['./src/index.js'],
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
          /*{
            test:/\.(s*)css$/,
            exclude: /node_modules/,
            use: ['style-loader','css-loader', 'sass-loader']
          },*/
          {
            test: /\.(s*)css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader', /*dự phòng*/
              use: ['css-loader', 'sass-loader'] /*sử dụng*/ 
            })
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
    },
    plugins: [
        new ExtractTextPlugin('style.css')
        //if you want to pass in options, you can do so:
        //new ExtractTextPlugin({
        //  filename: 'style.css'
        //})
      ]
}