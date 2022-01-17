export default function setBegginPageItems(pagesQuantity) {
	return Array.from({ length: pagesQuantity }, (item, index) => {
		const value = index + 1
		return {
			label: value,
			value
		}
	})
}
