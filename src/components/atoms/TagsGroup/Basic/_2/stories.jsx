import TagsCell from '.'

const props = {
	tags: [
		{
			label: 'Teal',
			value: 'Teal'
		},
		{
			label: 'Blue',
			value: 'Blue'
		},
		{
			label: 'Gray',
			value: 'Gray'
		},
		{
			label: 'Red',
			value: 'Red'
		},
		{
			label: 'Pink',
			value: 'Pink'
		}
	]
}

export default {
	component: TagsCell,
	title: 'Atoms/TagsGroup/_2',
	args: props,
	argTypes: {
		totalToShow: {
			defaultValue: 1,
			name: 'totalToShow',
			description: 'O máximo de tags que será mostrada fora do Pophover',
			control: {
				type: 'number'
			},
			table: {
				type: {
					summary: 'Number'
				}
			}
		},
		tags: {
			name: 'tags',
			table: {
				type: {
					summary: '[{ label: string, value: string, color?: string }]'
				}
			}
		}
	}
}

export const Basic = (args) => <TagsCell {...props} {...args} />
