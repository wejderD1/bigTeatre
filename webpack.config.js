const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'public'),
    watch: true,
    mode: "development",
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [".js", ".ttf", ".png", ".jpg"]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
            {
                from: path.resolve(__dirname, 'public/img'),
                to: path.resolve(__dirname, 'dist/img')
            }
        ]})
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: 'file-loader'
            }
        ]
    }
}