const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'none',
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'sweethome.html',
            template: 'sweethome-timesheets/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin('main.css')
    ],
    entry: {
        home: './src/app.js',
        sweethome: './sweethome-timesheets/src/app.js',
    },
    output: {
        // path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
};