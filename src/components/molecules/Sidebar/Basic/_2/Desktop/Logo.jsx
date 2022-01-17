import { memo } from 'react'
import { useRouter } from 'next/router'
import { Tooltip, Image, Flex, useColorModeValue } from '@chakra-ui/react'

import { useSideBar } from 'contexts/SideBar/Provider'

function Logo() {
	const { push } = useRouter()
	const { isOpen } = useSideBar()

	const bg = useColorModeValue('green.500', 'green.800')

	const colapseLogo = useColorModeValue(
		'/images/alertas-logo-mini.svg',
		'/images/alertas-logo-mini-dark.svg'
	)

	const desktopLogo = useColorModeValue(
		'/images/alertas-logo.svg',
		'/images/alertas-logo-dark.svg'
	)

	return (
		<Tooltip gutter={10} placement="right" label="Voltar a lista de instituições">
			<Flex
				h="49px"
				align="center"
				justify="center"
				cursor="pointer"
				transition="all 0.4s"
				_hover={{ bg }}
				onClick={() => push('/')}
			>
				<Flex align="center">
					{isOpen ? (
						<Image
							src={desktopLogo}
							fallbackSrc={desktopLogo}
							alt="Logo do Alertas"
							h="40px"
						/>
					) : (
						<Image
							src={colapseLogo}
							fallbackSrc={colapseLogo}
							alt="Logo do Alertas"
							h="40px"
						/>
					)}
				</Flex>
			</Flex>
		</Tooltip>
	)
}

export default memo(Logo)
