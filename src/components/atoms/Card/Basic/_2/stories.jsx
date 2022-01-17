import Card from '.'

export default {
	component: Card,
	title: 'Atoms/Card/_2',
	argTypes: {
		label: {
			name: 'label',
			defaultValue: 'Alo Você',
			table: {
				type: {
					summary: 'string'
				}
			}
		}
	}
}

export const Basic = (args) => <Card {...args} />
