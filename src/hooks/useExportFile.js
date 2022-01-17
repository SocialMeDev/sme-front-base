import { useState } from 'react'
import { slugMask } from 'utils/masks'

function useExportFile({ data, fileName, fileType }) {
	const [isLoading, setIsLoading] = useState(false)

	const downloadFile = () => {
		setIsLoading(true)

		const blob = new Blob([JSON.stringify(data)], { type: fileType })

		const link = document.createElement('a')

		link.download = slugMask(fileName)

		link.href = window.URL.createObjectURL(blob)

		const clickEvt = new MouseEvent('click', {
			view: window,
			bubbles: true,
			cancelable: true
		})

		link.dispatchEvent(clickEvt)

		link.remove()

		setIsLoading(false)
	}

	const onExport = async (event) => {
		event.preventDefault()

		downloadFile()
	}

	return { isLoading, onExport }
}

export default useExportFile
