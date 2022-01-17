import { Box } from '@chakra-ui/react'
import { memo } from 'react'

import PageItems from './components/PageItems'
import usePagination from './hooks/usePagination'

function Pagination({ currentPage, limit, totalItems, onChangePage }) {
	const { choosePages } = usePagination({ currentPage, limit, totalItems })

	return (
		<Box w="100%" mt="4">
			<PageItems
				currentPage={currentPage}
				choosePages={choosePages}
				onChangePage={onChangePage}
			/>
		</Box>
	)
}

export default memo(Pagination)
