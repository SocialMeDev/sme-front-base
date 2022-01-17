import NextLink from 'next/link'

export default function Link({ href, children }) {
	return (
		<NextLink href={href} passHref>
			<a>{children}</a>
		</NextLink>
	)
}
