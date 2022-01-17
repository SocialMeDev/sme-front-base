export default function setQuickJumpToEnd(pages, maxPages) {
	pages[7] = { label: '...', value: maxPages - 1 }
	pages[8] = { label: String(maxPages), value: maxPages }

	return pages
}
