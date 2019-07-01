const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require("path")

module.exports = {
    entry: ["./src/app.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "source_bundle.js",
        publicPath: "/"

    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            } , 
            {
            test: /\.html$/,
            use: [
                {
                loader: "html-loader"
                }
            ]
        
    },
    ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
