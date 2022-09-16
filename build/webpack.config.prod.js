const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpackConfig = require('./webpack.config.common') 

module.exports = merge(webpackConfig,{
    mode : 'production', 
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.prod.html',
        inject: false
      }),
      new CopyWebpackPlugin({
        patterns: [
            { from: './src/assets/fonts', to: './fonts' },
            { from: './src/config', to: './config' },
        ]
      })
    ]
})