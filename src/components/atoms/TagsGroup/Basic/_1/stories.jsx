import TagsGroup from '.'

const props = {
	emptyText: 'Não há nenhuma tag',
	tags: [
		{ label: 'Bolo', value: 'Bolo' },
		{ label: 'Cenoura', value: 'Cenoura' },
		{ label: 'Beteraba', value: 'Beteraba' },
		{ label: 'Morango', value: 'Morango' }
	]
}

export default {
	component: TagsGroup,
	title: 'Atoms/TagsGroup/Basic/_1',
	args: props,
	argTypes: {
		onRemoveTag: {
			table: {
				type: {
					summary: '(tags: ITags[], key: string) => void'
				}
			}
		},
		emptyText: {
			name: 'emptyText',
			description: 'Aparece quando não há nenhuma tag',
			control: {
				type: 'text'
			},
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		tags: {
			table: {
				type: {
					summary: '[{ label: string, value: string,  color?: string }]'
				}
			}
		}
	}
}

export const Common = (args) => {
	return <TagsGroup onRemoveTag={() => null} {...args} {...props} />
}
