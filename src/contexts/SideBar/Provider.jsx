import { useEffect, useContext } from 'react'
import { useDisclosure, useBreakpointValue } from '@chakra-ui/react'

import SideBarContext from './Context'

export default function SideBarDrawerProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isMobile = useBreakpointValue({ base: true, md: false })

  useEffect(() => {
    if (isMobile) {
      return onClose()
    }
    onOpen()
  }, [onOpen, onClose, isMobile])

  return (
    <SideBarContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </SideBarContext.Provider>
  )
}

export const useSideBar = () => useContext(SideBarContext)
