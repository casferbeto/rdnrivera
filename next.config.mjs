/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		// Resuelve alias usando la sintaxis de ES Modules
		config.resolve.alias = {
			...config.resolve.alias,
			'react/jsx-runtime': new URL(
				'./node_modules/react/jsx-runtime.js',
				import.meta.url,
			).pathname,
			'react/jsx-dev-runtime': new URL(
				'./node_modules/react/jsx-dev-runtime.js',
				import.meta.url,
			).pathname,
		};
		return config;
	},
};

export default nextConfig;
