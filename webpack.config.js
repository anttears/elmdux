const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/client/App.js",
    output: {
        filename: './js/index.js'
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {   
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        [
                            'transform-react-jsx',
                            { 'pragma': 'JsxConverter' }
                        ]
                    ]
                }
            }
        }, {
            test: /\.html$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }]
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }]
    }
};
