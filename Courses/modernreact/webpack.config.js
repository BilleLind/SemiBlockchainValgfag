const path = require("path");
//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
      },
    mode: process.env.NODE_ENV || "development",
    resolve: { extensions: ['*', '.js', '.jsx'] },
    devServer: { contentBase: path.resolve(__dirname, './public') },
    plugins: [

    ],
};
//new HtmlWebpackPlugin({template: path.join(__dirname, "src", "index.html"),}),

