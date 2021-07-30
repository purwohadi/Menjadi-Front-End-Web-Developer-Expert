/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable import/no-extraneous-dependencies */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const WebpackPwaManifest = require('webpack-pwa-manifest');

const ImageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules:
        [{
        	test: /\.css$/,
        	use:
            [
            	{
            		loader: 'style-loader',
            	},
            	{
            		loader: 'css-loader?url=false',
            	},
            ],
        },
        {
        	test: /\.(png|svg|jpg|jpeg|gif)$/,
        	use: [{
        		loader: 'file-loader',
        		options: {
        			url: false,
				 },
        	}],
        },
        ],
	},
	plugins: [
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
		  template: path.resolve(__dirname, 'src/templates/index.html'),
		  filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public/images'),
					to: path.resolve(__dirname, 'dist/images/'),
				},
			],
		}),
		new ServiceWorkerWebpackPlugin({
			entry: path.resolve(__dirname, 'src/scripts/sw.js'),
		}),
		new ImageminWebpackPlugin({
			plugins: [
				ImageminMozjpeg({
					quality: 50,
					progressive: true,
				}),
			],
		}),
		new BundleAnalyzerPlugin(
			{
				analyzerMode: 'disabled',
				generateStatsFile: true,
				statsOptions: { source: false },
			},
		),
		new WebpackPwaManifest({
			name: 'Restaurant Apps Starter Project',
			short_name: 'Purwo Restaurant',
			description: 'Purwo Restaurant Apps Starter Project',
			start_url: '/index.html',
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#d84315',
			icons: [
				{
					src: path.resolve(__dirname, 'src/public/images/icons/restaurant-icon-48x48.png'),
					sizes: '48x48',
					type: 'image/png',
					purpose: 'any maskable',
				},
				{
					src: path.resolve(__dirname, 'src/public/images/icons/restaurant-icon-72x72.png'),
					sizes: '72x72',
					type: 'image/png',
					purpose: 'any maskable',
				},
				{
					src: path.resolve(__dirname, 'src/public/images/icons/restaurant-icon-96x96.png'),
					sizes: '96x96',
					type: 'image/png',
					purpose: 'any maskable',
				},
				{
					src: path.resolve(__dirname, 'src/public/images/icons/restaurant-icon-120x120.png'),
					sizes: '120x120',
					type: 'image/png',
					purpose: 'any maskable',
				},
				{
					src: path.resolve(__dirname, 'src/public/images/icons/restaurant-icon-144x144.png'),
					sizes: '144x144',
					type: 'image/png',
					purpose: 'any maskable',
				},
				{
					src: path.resolve(__dirname, 'src/public/images/icons/restaurant-icon-192x192.png'),
					sizes: '192x192',
					type: 'image/png',
					purpose: 'any maskable',
				},
				{
					src: path.resolve(__dirname, 'src/public/images/icons/restaurant-icon-512x512.png'),
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any maskable',
				},
			],
		}),
	],
	optimization: {
		splitChunks: {
		  chunks: 'all',
		  minSize: 20000,
		  maxSize: 70000,
		  minChunks: 1,
		  maxAsyncRequests: 30,
		  maxInitialRequests: 30,
		  automaticNameDelimiter: '~',
		  enforceSizeThreshold: 50000,
		  cacheGroups: {
				defaultVendors: {
			  test: /[\\/]node_modules[\\/]/,
			  priority: -10,
				},
				default: {
			  minChunks: 2,
			  priority: -20,
			  reuseExistingChunk: true,
				},
		  },
		},
	},
};
