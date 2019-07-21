const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/app.js"],
    
     plugins: [
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
             title: 'Production'
         })

     ],
     output:{
         filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         publicPath: '/'
     },
     module: {
         rules: [
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
     plugins:[
         new HtmlWebpackPlugin({
             template: "./src/index.html",
             filename: "./index.html"
         })
     ]
         
};