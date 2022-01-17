import { memo } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import MobileView from './Mobile'
import DesktopView from './Desktop'

function SideBar({ sidebarItems }) {
	const isMobile = useBreakpointValue({ base: true, md: false })

	if (isMobile) {
		return <MobileView sidebarItems={sidebarItems} />
	}

	return <DesktopView sidebarItems={sidebarItems} />
}

export default memo(SideBar)
