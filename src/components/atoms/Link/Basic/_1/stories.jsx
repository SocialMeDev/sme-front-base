import { Button } from '@chakra-ui/react'
import Link from '.'

export default {
	component: Link,
	title: 'Atoms/Link/Basic/_1',
	argTypes: {
		href: {
			name: 'href',
			defaultValue: '/my-page',
			table: {
				type: {
					summary: 'string'
				}
			}
		}
	}
}

export const Common = (args) => (
	<Link {...args}>
		<Button>Link</Button>
	</Link>
)
