const withPWA = require('next-pwa')

module.exports = () => {
	const isProduction = process.env.NODE_ENV === 'production'

	const configs = {
		trailingSlash: true,
		reactStrictMode: true,
		pwa: {
			dest: 'public',
			register: true,
			skipWaiting: true,
			disable: !isProduction
		}
	}

	return withPWA(configs)
}
