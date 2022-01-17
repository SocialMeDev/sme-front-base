import { useEffect, useState } from 'react'

export default function useOriginURL(url) {
	const [originURL, setOriginLink] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		let isMounted = true

		setIsLoading(true)

		fetch(url)
			.then((response) => response.blob())
			.then((blob) => {
				const blobURL = URL.createObjectURL(blob)

				if (isMounted) {
					setOriginLink(blobURL)
					setIsLoading(false)
				}
			})
			.catch((err) => {
				console.error('Erro ao gerar o Blob do arquivo', err)
			})

		return () => {
			isMounted = false
		}
	}, [url])

	return { isLoading, originURL }
}
