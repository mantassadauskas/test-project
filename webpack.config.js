const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(s[ac]|c)ss$/,
                use: [ {
                    loader: MiniCssExtractPlugin.loader,
                    options: { publicPath: "" }
                }, "css-loader", "sass-loader" ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ "babel-loader" ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new MiniCssExtractPlugin()
    ]
}