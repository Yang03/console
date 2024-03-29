const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcDir = __dirname + "../resource";
const distDir = __dirname + "../public";

module.exports = {
    entry: './resource/main.js',
    output: {
        path: distDir,
        filename: 'index.[hash:7].js'
    },
    devtool: 'source-map',
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        inline: true,
        port: 8090,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // we do not want anything from node_modules to be compiled
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(less|scss)$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader", options: { javascriptEnabled: true }},
                ]
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         plugins:[
                    //             require('autoprefixer')({
                    //                 browsers:['last 5 version']
                    //             })
                    //         ],
                    //         exclude: /node_modules/,
                    //     }
                     // }
                
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
                use: 'url-loader?limit=8129',
                exclude: /node_modules/
            } 
        ]   
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './views/index.hbs',
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new ExtractTextPlugin({
            filename: "style.scss"
        })
    ]    
}