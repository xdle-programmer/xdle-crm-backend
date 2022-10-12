const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'resources/react-src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'public/react-build'),
        publicPath: '',
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        hash: false,
        filename: path.resolve(__dirname, 'public/react-build/index.html'),
        template: path.resolve(__dirname, 'resources/react-src/index.html'),
        cache: false
    })],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'resources/react-src'),
                exclude: /node_modules/,
                use: [{

                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve:
        {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public/react-build'),
        },
        compress: true,
        port: 9003,
    },
    cache: false
};
