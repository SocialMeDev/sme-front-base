import { memo } from 'react'

import { ScaleFade } from '@chakra-ui/react'

import Card from 'components/atoms/Card/Basic#1'

function AccountCard(props) {
  return (
    <ScaleFade in={true} initialScale={0.9}>
      <Card p="0" minW="400px" boxShadow="none" overflowY="auto">
        {props.children}
      </Card>
    </ScaleFade>
  )
}

export default memo(AccountCard)
