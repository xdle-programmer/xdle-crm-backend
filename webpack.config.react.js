const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'resources/react-src', 'app.jsx'),
    output: {
        path: path.resolve(__dirname, 'public/react-build'),
        filename: 'bundle.js'
    },
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
            }
        ]
    }
}
