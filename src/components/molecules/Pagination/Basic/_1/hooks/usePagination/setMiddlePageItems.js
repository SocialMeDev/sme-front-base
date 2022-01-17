export default function setMiddlePageItems(choosePages, currentPage) {
	choosePages[2] = { label: currentPage - 2, value: currentPage - 2 }
	choosePages[3] = { label: currentPage - 1, value: currentPage - 1 }
	choosePages[4] = { label: currentPage, value: currentPage }
	choosePages[5] = { label: currentPage + 1, value: currentPage + 1 }
	choosePages[6] = { label: currentPage + 2, value: currentPage + 2 }

	return choosePages
}
