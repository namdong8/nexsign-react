const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpackConfig = require('./webpack.config.common')

module.exports = merge(webpackConfig, {
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.dev.html',
			inject: false,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/assets/fonts', to: './nex-sign/fonts' },
				{
					from: './src/config/config.dev.json',
					to: './nex-sign/config/config.json',
				},
			],
		}),
	],
})
