import { memo } from 'react'
import {
  Heading,
  Image,
  VStack,
  Center,
  ScaleFade,
  useColorModeValue,
} from '@chakra-ui/react'

import Card from 'components/atoms/Card/Basic#1'

import { useInstitution } from 'contexts/Institution/Provider'

function PageCard({ children, ...rest }) {
  const { institution } = useInstitution()

  const primary = process.env.NEXT_PUBLIC_COLOR_SCHEME

  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Center as="main" p="4" bg={bg} minH="100vh">
      <ScaleFade in={true} initialScale={0.9}>
        <Card boxShadow="md" {...rest} maxW={{ base: '95vw', md: 'auto' }}>
          <VStack w="100%">
            <Image
              height="80px"
              src={institution.avatar}
              fallbackSrc={institution.avatar}
              alt="Logo de uma instituição"
            />

            <Heading color={`${primary}.500`}>{institution.short_name}</Heading>

            {children}
          </VStack>
        </Card>
      </ScaleFade>
    </Center>
  )
}

export default memo(PageCard)
