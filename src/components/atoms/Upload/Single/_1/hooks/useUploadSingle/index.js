import { useState } from 'react'

import handleInputFileEvent from './handleInputFileEvent'

function useUploadSingle() {
	const [loading, setLoading] = useState(false)
	const [preview, setPreview] = useState('')

	async function onChangeInputFile(event, onUpload) {
		setLoading(true)

		const file = await handleInputFileEvent(event)

		if (!file) {
			setLoading(true)

			return null
		}

		setPreview(URL.createObjectURL(file))

		setLoading(true)

		const upload = await onUpload(file)

		return upload
	}

	return { loading, preview, onChangeInputFile }
}

export default useUploadSingle
