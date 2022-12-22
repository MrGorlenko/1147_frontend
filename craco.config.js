const webpack = require('webpack');

module.exports = {
	webpack: {
		configure: {
			resolve: {
				fallback: {
					fs: require.resolve('fs'),
					os: require.resolve('os-browserify/browser'),
					stream: require.resolve('stream-browserify'),
					crypto: require.resolve('crypto-browserify'),
				},
			},
			plugins: [
				new webpack.ProvidePlugin({
					Buffer: ['buffer', 'Buffer'],
					process: 'process/browser',
				}),
			],
		},
	},
};
