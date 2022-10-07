const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpackConfig = require('./webpack.config.common')

module.exports = merge(webpackConfig, {
	mode: 'production',
	plugins: [
		new HtmlWebpackPlugin({
			filename: './nex-sign/index.html',
			template: './public/portal.service.html',
			inject: false,
			minify: false,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/assets/fonts', to: './nex-sign/fonts' },
				{
					from: './src/config/config.prod.json',
					to: './nex-sign/config/config.json',
				},
				{
					from: './public/portal.module.html',
					to: './nex-sign/portal.module.html',
				},
			],
		}),
	],
})
