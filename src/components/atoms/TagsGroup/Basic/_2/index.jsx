import { memo } from 'react'
import { HStack, Tag } from '@chakra-ui/react'

import PopoverTags from './components/PopoverTags'

function TagsGroup({ tags, totalToShow }) {
	const total = totalToShow || 1

	return (
		<HStack>
			{tags.slice(0, total).map(({ label, value, color }) => (
				<Tag key={value} variant="solid" colorScheme={color}>
					{label}
				</Tag>
			))}
			<PopoverTags totalToShow={total} tags={tags} />
		</HStack>
	)
}

export default memo(TagsGroup)
