const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require("path")


module.exports = {
    entry: ["./src/app.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/"

    },
    watch: true,
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
            test: /\.html$/,
            use: [
                {
                loader: "html-loader"
                }
            ]
        
    },
    {
        test: /\.scss$/,
        use: ["style-loader",
            "css-loader",
            "sass-loader"
        ]
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        use:['file-loader']
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
