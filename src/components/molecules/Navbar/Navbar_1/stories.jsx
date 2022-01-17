import SideBarProvider from 'contexts/SideBar/Provider'

import Card from 'components/atoms/Card/Basic#1'

import Navbar from '.'

export default {
  component: Navbar,
  title: 'Molecules/Navbar/Basic#1',
  argTypes: {
    noSideBar: {},
  },
}

export const Basic = (args) => (
  <SideBarProvider>
    <Card>
      <Navbar {...args} />
    </Card>
  </SideBarProvider>
)
