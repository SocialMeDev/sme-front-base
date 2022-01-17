import { useState, useEffect } from 'react'

import setBegginerPageItems from './setBegginerPageItems'
import setMiddlePageItems from './setMiddlePageItems'
import setLastPageItems from './setLastPageItems'
import setQuickJumpToBegginer from './setQuickJumpToBegginer'
import setQuickJumpToEnd from './setQuickJumpToEnd'

const usePagination = ({ totalItems, limit, currentPage }) => {
	const [choosePages, setPages] = useState([])

	const isMobile = window.innerWidth < 600

	useEffect(() => {
		function ChooseBegginerPageItems(maxPages = 0) {
			const pagesQuantity = maxPages < 9 ? maxPages : 9

			let pages = setBegginerPageItems(pagesQuantity)

			if (maxPages > 10) {
				pages = setQuickJumpToEnd(pages, maxPages)
			}

			if (isMobile) pages.splice(5, 2)

			return pages
		}

		function ChooseMiddlePageItems(maxItems) {
			let pages = []

			pages = setQuickJumpToBegginer(pages)
			pages = setMiddlePageItems(pages, currentPage)
			pages = setQuickJumpToEnd(pages, maxItems)

			if (isMobile) {
				pages.splice(2, 1)
				pages.splice(5, 1)
			}

			return pages
		}

		function ChooseLastPageItems(maxPages) {
			let pages = []

			pages = setQuickJumpToBegginer(pages)
			pages = setLastPageItems(pages, maxPages)

			if (isMobile) pages.splice(2, 2)

			return pages
		}

		function TreatedPageItemsInArray() {
			const maxPages = Math.ceil(totalItems / limit)

			const middlePageNeighbor = isMobile ? 3 : 5

			let currentPages = []

			if (maxPages <= 9 || currentPage < 7) {
				currentPages = ChooseBegginerPageItems(maxPages)
			} else if (currentPage < maxPages - middlePageNeighbor) {
				currentPages = ChooseMiddlePageItems(maxPages)
			} else {
				currentPages = ChooseLastPageItems(maxPages)
			}

			setPages(currentPages)
		}

		TreatedPageItemsInArray()
	}, [isMobile, currentPage, totalItems])

	return { choosePages }
}

export default usePagination
