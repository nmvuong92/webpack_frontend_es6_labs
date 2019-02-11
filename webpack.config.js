const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
          /*{
            test:/\.(s*)css$/,
            exclude: /node_modules/,
            use: ['style-loader','css-loader', 'sass-loader']
          },*/
          { /*tách file*/
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
        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true,
          }),
        new OptimizeCssAssetsPlugin() /*minify css lasted asset ouput */
        //if you want to pass in options, you can do so:
        //new ExtractTextPlugin({
        //  filename: 'style.css'
        //})
      ]
}