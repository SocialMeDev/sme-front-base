import Card from '.'

export default {
	component: Card,
	title: 'Atoms/Card/Basic/_2',
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

export const Common = (args) => <Card {...args} />
