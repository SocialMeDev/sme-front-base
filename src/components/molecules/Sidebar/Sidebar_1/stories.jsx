import SideBarProvider from 'contexts/SideBar/Provider'

import Card from 'components/atoms/Card/Basic#1'

import { GridLayout10, ToolsSettings } from 'components/atoms/Icons/Interface'

import Sidebar from '.'

export default {
  component: Sidebar,
  title: 'Molecules/Sidebar/Basic#1',
  argTypes: {},
}

export const Basic = (args) => {
  const sidebarItems = [
    {
      name: 'Grupo 1',
      icon: ToolsSettings,
      href: '/',
      childrens: [
        {
          label: 'Pagina 1',
          href: '',
          icon: GridLayout10,
        },
        {
          label: 'Pagina 2',
          href: '',
          icon: GridLayout10,
        },
        {
          label: 'Pagina 3',
          href: '',
          icon: GridLayout10,
        },
      ],
    },
    {
      name: 'Grupo 2',
      icon: ToolsSettings,
      href: '/',
      childrens: [
        {
          label: 'Pagina 1',
          href: '',
          icon: GridLayout10,
        },
        {
          label: 'Pagina 2',
          href: '',
          icon: GridLayout10,
        },
        {
          label: 'Pagina 3',
          href: '',
          icon: GridLayout10,
        },
        {
          label: 'Pagina 4',
          href: '',
          icon: GridLayout10,
        },
      ],
    },
  ]

  return (
    <SideBarProvider>
      <Card>
        <Sidebar sidebarItems={sidebarItems} {...args} />
      </Card>
    </SideBarProvider>
  )
}
