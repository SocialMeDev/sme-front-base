import { memo, useMemo } from 'react'
import { Flex, Input } from '@chakra-ui/react'

import useUploadSingle from './hooks/useUploadSingle'
import CardImagePreview from './components/CardImagePreview'

function UploadSingle({ defaultImage, onUpload }) {
	const { loading, preview, onChangeInputFile } = useUploadSingle()

	const defaulPreview = useMemo(() => {
		if (preview) return preview

		return defaultImage || null
	}, [preview, defaultImage])

	return (
		<Flex>
			<CardImagePreview loading={loading} preview={defaulPreview} />

			<Input
				id="input-file"
				type="file"
				accept="image/*"
				hidden
				onChange={async (event) => {
					await onChangeInputFile(event, onUpload)
				}}
			/>
		</Flex>
	)
}

export default memo(UploadSingle)
