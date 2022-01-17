import { memo } from 'react'
import { Button, HStack, VStack, useColorModeValue } from '@chakra-ui/react'

import Link from 'components/atoms/Link'

function LinkButton({ href, text }) {
  const primary = process.env.NEXT_PUBLIC_COLOR_SCHEME
  const bg = useColorModeValue(`${primary}.300`, `${primary}.800`)
  const color = useColorModeValue('white', 'gray.200')

  return (
    <VStack w="100%" p="4">
      <HStack w="100%" justify="center">
        <Link href={href}>
          <Button
            size="sm"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{ bg, color }}
          >
            {text}
          </Button>
        </Link>
      </HStack>
    </VStack>
  )
}

export default memo(LinkButton)
