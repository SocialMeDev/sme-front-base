import { memo } from 'react'
import {
	Box,
	Popover,
	PopoverHeader,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Heading,
	Tag,
	VStack
} from '@chakra-ui/react'

function PopoverTags({ totalToShow, tags }) {
	const popoverTags = tags.slice(totalToShow, tags.length)

	const isToMuchTagsToHide = tags.length > totalToShow

	return (
		<Popover trigger="hover">
			<PopoverTrigger>
				{isToMuchTagsToHide ? (
					<Tag cursor="pointer" variant="solid">
						+ {popoverTags.length}
					</Tag>
				) : (
					<Box />
				)}
			</PopoverTrigger>
			<PopoverContent maxW="150px">
				<PopoverHeader>
					<Heading>Mais tags</Heading>
				</PopoverHeader>
				<PopoverBody>
					<VStack align="flex-start">
						{popoverTags.map(({ label, value, color }) => (
							<Tag key={value} variant="solid" colorScheme={color}>
								{label}
							</Tag>
						))}
					</VStack>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	)
}

export default memo(PopoverTags)
