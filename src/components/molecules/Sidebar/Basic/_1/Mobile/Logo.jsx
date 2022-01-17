import { memo } from 'react'
import { useRouter } from 'next/router'
import { Image, Flex, useColorModeValue } from '@chakra-ui/react'

function Logo() {
  const { push } = useRouter()

  const logo = useColorModeValue(
    '/images/alertas-logo-mini.svg',
    '/images/alertas-logo-mini-dark.svg'
  )

  return (
    <Flex h="49px" align="center" justify="center" onClick={() => push('/')}>
      <Flex align="center">
        <Image src={logo} fallbackSrc={logo} alt="Logo do Alertas" h="40px" />
      </Flex>
    </Flex>
  )
}

export default memo(Logo)
