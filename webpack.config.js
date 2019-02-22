const path = require("path");
const webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin")

var VueLoaderPlugin = require("./node_modules/vue-loader/lib/plugin");

module.exports = {
    entry: path.join(__dirname,"src/index.js"),
    output: {
        path: path.join(__dirname,"dist"),
        filename: "main.js"},
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname,"./src/index.html"),
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.(jpg|png|gif)$/,use:["url-loader"]},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            {test:/.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:["vue-loader"]}
        ]
    },
    resolve: {
        alias: {
        //   "vue$": "vue/dist/vue.js"
        }
      }
}