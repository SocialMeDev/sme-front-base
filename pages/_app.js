import { ChakraProvider } from '@chakra-ui/react'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import '@fontsource/poppins'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
			<ToastContainer />
		</ChakraProvider>
	)
}
export default MyApp
