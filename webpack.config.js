const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: { index: path.resolve(__dirname, "src", "index.js") },
    output: {
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            },
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ "babel-loader" ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}