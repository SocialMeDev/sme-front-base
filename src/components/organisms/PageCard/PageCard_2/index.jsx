import { memo } from 'react'

import {
  VStack,
  Heading,
  Text,
  Image,
  Center,
  ScaleFade,
  useColorModeValue,
} from '@chakra-ui/react'

import Card from 'components/atoms/Card/Basic#1'

import { useInstitution } from 'contexts/Institution/Provider'

function PageCard({ children, title, description, ...rest }) {
  const { institution } = useInstitution()

  const primary = process.env.NEXT_PUBLIC_COLOR_SCHEME

  const bg = useColorModeValue('gray.50', 'gray.900')
  const color = useColorModeValue('gray.200', 'whiteAlpha.600')

  return (
    <Center as="main" p="4" bg={bg} minH="100vh">
      <ScaleFade in={true} initialScale={0.9}>
        <Card
          w="400px"
          p="4"
          boxShadow="lg"
          maxW={{ base: '95vw', md: '450px' }}
          {...rest}
        >
          <VStack mb="4" px="2">
            <Image
              m="2"
              height="80px"
              src={institution.avatar}
              fallbackSrc={institution.avatar}
              alt="Logo de uma instituição"
            />

            <Heading as="h2" color={`${primary}.500`}>
              {institution.short_name}
            </Heading>
            <Heading>{title}</Heading>
            <Text textAlign="center" color={color}>
              {description}
            </Text>
          </VStack>

          {children}
        </Card>
      </ScaleFade>
    </Center>
  )
}

export default memo(PageCard)
