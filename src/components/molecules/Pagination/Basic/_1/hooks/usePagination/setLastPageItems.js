export default function setLastPages(pages, maxValue) {
	pages[2] = { label: maxValue - 6, value: maxValue - 6 }
	pages[3] = { label: maxValue - 5, value: maxValue - 5 }
	pages[4] = { label: maxValue - 4, value: maxValue - 4 }
	pages[5] = { label: maxValue - 3, value: maxValue - 3 }
	pages[6] = { label: maxValue - 2, value: maxValue - 2 }
	pages[7] = { label: maxValue - 1, value: maxValue - 1 }
	pages[8] = { label: maxValue, value: maxValue }

	return pages
}
