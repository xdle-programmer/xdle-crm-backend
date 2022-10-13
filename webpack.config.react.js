const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './resources/react-src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'public/react-build'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './resources/react-src/index.html',
        filename: './index.html',
    })],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve:
        {
            extensions: ['.tsx', '.ts', '.js'],
        },
    devServer: {
        static: './public/react-build',
        compress: true,
        port: 9005,
        hot: true,
        historyApiFallback: true,
    },
    cache: false
};
