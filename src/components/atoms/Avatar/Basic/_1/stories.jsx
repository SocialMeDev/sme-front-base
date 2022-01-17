import Avatar from '.'

const props = {
	src: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490'
}

export default {
	component: Avatar,
	title: 'Atoms/Avatar/Basic/_1',
	args: props,
	argTypes: {
		src: {
			name: 'src',
			control: {
				type: 'text'
			},
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		size: {
			value: 'md',
			options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
			control: { type: 'select' },
			table: {
				type: {
					summary: 'String'
				}
			}
		}
	}
}

export const Common = (args) => <Avatar {...props} {...args} />
