const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const webpack = require('webpack')

let getFiles = function (dir, files_, extension) {
    files_ = files_ || [];
    let files = fs.readdirSync(dir);
    let regular = new RegExp('.\\.' + extension + '$');

    for (let i in files) {

        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_, extension);
        } else if (regular.test(name)) {
            files_.push(name);
        }
    }
    return files_;
};

// Файлы стилей
let styleEntryArray = [];
getFiles(path.resolve(__dirname, './resources/proofBlocks'), styleEntryArray, 'scss');
getFiles(path.resolve(__dirname, './resources/proofBlocks'), styleEntryArray, 'css');

new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
})

module.exports = {
    mode: 'development',
    entry: {
        main: styleEntryArray,
        reactBundle: ['@babel/polyfill','./resources/react/index.jsx'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './public')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {config: {path: path.resolve(__dirname, 'postcss.config.js')}}
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {config: {path: path.resolve(__dirname, 'postcss.config.js')}}
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        emitFile: false,
                    }
                }],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new IgnoreEmitPlugin([/^main.*\.js$/, /^main.*\.js.map$/])
    ],
    devServer: {
        // overlay: true,
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        historyApiFallback: true,
        port: 8081,
        open: true
    }
};
