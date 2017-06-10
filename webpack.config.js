//initialization
const webpack = require('webpack');

//file ops
const HtmlWebpackPlugin = require('html-webpack-plugin');

//folder ops
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

//postcss support
const postcssImport = require('postcss-easy-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

//constants
const APP = path.join(__dirname, 'app');
const BUILD = path.join(__dirname, 'build');
const STYLE = path.join(__dirname, 'app/style.css');
const PUBLIC = path.join(__dirname, 'app/public');
const TEMPLATE = path.join(__dirname, 'app/templates/index.html');
const NODE_MODULES = path.join(__dirname, 'node_modules');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
	entry: {
		app: APP,
		style: STYLE
	},
	output: {
		path: BUILD,
		filename: '[name].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader?cacheDirectory'],
				include: APP
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader', 
					{ loader: 'css-loader', options: { importLoaders: 1 } }, 
					'postcss-loader'
				],
				include: [APP, NODE_MODULES]
			},
			{
				test: /\.json$/,
				loader: 'json',
				include: [APP, NODE_MODULES]
			}
		]
	},
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		stats: 'errors-only',
		host: HOST,
		port: PORT,
		contentBase: BUILD
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([
			{ from: PUBLIC, to: BUILD }
		],
		{
			ignore: [
				'.DS_Store'
			]
		}
		),
		new HtmlWebpackPlugin({
			template: TEMPLATE,
			inject: 'body'
		})
	]
};
