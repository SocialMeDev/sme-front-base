import { memo, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'

function CheckPermission({ children, isPermited, redirect }) {
	const toast = useToast()
	const { push } = useRouter()

	useEffect(() => {
		if (!isPermited) {
			toast({
				description: 'Você não tem permissão',
				position: 'top',
				status: 'error'
			})

			push(redirect)
		}
	}, [isPermited, redirect])

	return isPermited ? <div>{children}</div> : <div />
}

export default memo(CheckPermission)
