const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    name : 'React-webpack-setting', // 웹팩 설정 이름
    mode : 'development', //실서비스 : Production
    devtool : 'eval',
    resolve : {
        extensions : ['.js', '.jsx']
    },
    entry:{
        app : ['./src/index.jsx'], 
    },
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'app.js',
        library: 'NEX_SIGN',
        libraryTarget: 'umd'
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)(\?.*)?$/,
                exclude: /node_module/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env', '@babel/preset-react'
                    ]
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        inject: true
      }),
      new CopyWebpackPlugin({
        patterns: [
            { from: './src/assets/fonts', to: './fonts' },
            { from: './src/config', to: './config' },
        ]
      })
    ]
}