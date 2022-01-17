import { useState } from 'react'

import Pagination from '.'

export default {
	component: Pagination,
	title: 'Molecules/Pagination/Basic/_1',
	argTypes: {
		currentPage: {
			name: 'currentPage',
			type: { name: 'number' },
			defaultValue: 1,
			table: {
				type: {
					summary: 'number'
				}
			},
			control: {
				type: 'number'
			}
		},
		limit: {
			name: 'limit',
			type: { name: 'number' },
			defaultValue: 10,
			table: {
				type: {
					summary: 'number'
				}
			},
			control: {
				type: 'number'
			}
		},
		totalItems: {
			name: 'totalItems',
			type: { name: 'number', required: false },
			defaultValue: 100,
			table: {
				type: {
					summary: 'number'
				}
			},
			control: {
				type: 'number'
			}
		},
		onChangePage: {
			table: {
				type: {
					summary: '(nextPage: number) => void'
				}
			}
		}
	}
}

export const Common = (args) => {
	const [page, setPage] = useState(1)

	function onChangePage(nextPage) {
		setPage(nextPage)
	}

	return <Pagination {...args} currentPage={page} onChangePage={onChangePage} />
}
