import { memo } from 'react'
import { Flex, Box, useColorModeValue } from '@chakra-ui/react'
import Sidebar from 'components/molecules/Sidebar/Sidebar_1'
import Navbar from 'components/molecules/Navbar/Navbar_1'

function Dashboard({ sidebarItems, children }) {
  return (
    <Flex as="main">
      <Sidebar sidebarItems={sidebarItems || []} />
      <Box w="-webkit-fill-available">
        <Navbar />
        <Box
          h="calc(100vh - 50px)"
          p="4"
          bg={useColorModeValue('gray.50', 'gray.900')}
          overflowY="auto"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default memo(Dashboard)
