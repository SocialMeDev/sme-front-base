import UploadSingle from '.'

const props = {
	defaultImage: 'https://randomuser.me/api/portraits/women/63.jpg'
}

export default {
	component: UploadSingle,
	title: 'Atoms/Upload/Single/_1',
	args: props,
	argTypes: {
		defaultImage: {
			name: 'defaultImage',
			defaultValue: 'https://randomuser.me/api/portraits/women/63.jpg',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		onUpload: {
			name: 'onUpload',
			table: {
				type: {
					summary: '(File) => string'
				}
			}
		}
	}
}
export const Common = (args) => <UploadSingle {...props} {...args} />
