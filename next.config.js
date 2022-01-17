const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
	let env = {}

	if (phase === PHASE_DEVELOPMENT_SERVER) {
		env = {
			customKey: 'development'
		}
	} else {
		env = {
			customKey: 'production'
		}
	}

	return {
		trailingSlash: true,
		reactStrictMode: true,
		env
	}
}
