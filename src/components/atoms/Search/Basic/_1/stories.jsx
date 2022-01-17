import { Box, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import Search from '.'

export default {
	component: Search,
	title: 'Atoms/Search/Basic/_1'
}

export const Common = (args) => {
	const { register, watch } = useForm({
		defaultValues: { input: 'Input' }
	})

	return (
		<Box>
			<Search {...args} size="md" {...register('input')} />

			<Text mt="4" fontSize="md">
				Search: {watch('input')}
			</Text>
		</Box>
	)
}
