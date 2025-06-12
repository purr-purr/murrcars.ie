/**
 * @type {import('next').NextConfig}
 */
// const withImages = require('next-images');

const nextConfig = {
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
	},
	webpack: (config, {isServer}) => {
		config.module.rules.push({
			test: /\.(mp4|webm|mov)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 500 * 1024 * 1024,
					fallback: 'file-loader',
					publicPath: '/_next/static/media/',
					outputPath: `${isServer ? '../' : ''}/_next/static/media/`,
					name: '[name].[ext]',
				},
			},
		});
		
		return config;
	},
};

export default nextConfig;
