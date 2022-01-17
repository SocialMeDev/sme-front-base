import { Avatar, useStyleConfig } from '@chakra-ui/react'

export default function CustomAvatar(props) {
	const { size, variant, ...rest } = props

	const styles = useStyleConfig('CustomAvatar', { size, variant })

	return <Avatar size={size} variant={variant} sx={styles} {...rest} />
}
