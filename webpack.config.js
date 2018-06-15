const path = require('path');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
let pathsToClean = [
    'js'
];
// the clean options to use
let cleanOptions = {
    root:     path.resolve(__dirname, 'web'),
    verbose:  true,
    dry:      false
};
module.exports = {
    watch: true,
    entry: {
        base: './assets/js/base.entry.js',
        validation: './assets/js/validation.entry.js'
    },
    output: {
        path: path.resolve(__dirname, './web/js/'),
        filename: '[name].js'
    },
    mode: 'production',
    optimization: {
        // splitChunks: {
        //     chunks: "all"
        // }
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename:'./../css/entry.bundle.css'}),
        // new webpack.DefinePlugin({ // <-- key to reducing React's size
        //         //     'process.env': {
        //         //         'NODE_ENV': JSON.stringify('production')
        //         //     }
        //         // }),
        new UglifyJsPlugin({
            uglifyOptions: {
                ie8: true,
                output: {
                    comments: false
                },
                compress: {
                    drop_console: true
                }
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        // new HtmlWebPackPlugin({
        //     template: "./assets/templates/base.html.twig",
        //     filename: "./../../index.html",
        // }),
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
};