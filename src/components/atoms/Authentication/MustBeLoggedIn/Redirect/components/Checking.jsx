import { memo, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'

import { useRouter } from 'next/router'

function Checking({ children, isPermited, redirect }) {
	const toast = useToast()
	const { push } = useRouter()

	useEffect(() => {
		if (!isPermited && redirect) {
			toast({
				description: 'Você não está conectado',
				position: 'top',
				status: 'error'
			})

			push(redirect)
		}
	}, [isPermited, redirect])

	return isPermited ? <div>{children}</div> : <div />
}

export default memo(Checking)
