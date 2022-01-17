import SideBarProvider from 'contexts/SideBar/Provider'

import Card from 'components/atoms/Card/Basic/_1'

import Navbar from '.'

export default {
	component: Navbar,
	title: 'Molecules/Navbar/Basic/_1',
	argTypes: {
		noSideBar: {}
	}
}

export const Common = (args) => (
	<SideBarProvider>
		<Card>
			<Navbar {...args} />
		</Card>
	</SideBarProvider>
)
