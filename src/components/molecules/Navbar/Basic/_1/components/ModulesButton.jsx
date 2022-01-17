import {
	IconButton,
	Image,
	Drawer,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Box,
	Flex,
	SimpleGrid,
	Text
} from '@chakra-ui/react'
import Link from 'components/logical/Link'
import { GridLayout12 } from 'components/ui/atoms/Icons/Interface'
import { motion } from 'framer-motion'

const MotionFlex = motion(Flex)

const modules = [
	{
		href: '/asfsa',
		imageURL: '/images/brands/account_64x64.png',
		name: 'Perfil'
	},
	{
		href: '/',
		imageURL: '/images/brands/wallet_64x64.png',
		name: 'Carteira'
	},
	{
		href: '/',
		imageURL: '/images/brands/beneficiary_64x64.png',
		name: 'Beneficiário'
	},
	{
		href: '/',
		imageURL: '/images/brands/provider_64x64.png',
		name: 'Parceiro'
	},
	{
		href: '/',
		imageURL: '/images/brands/giver_64x64.png',
		name: 'Doador'
	},
	{
		href: '/',
		imageURL: '/images/brands/manager_64x64.png',
		name: 'Gestor'
	},
	{
		href: '/',
		imageURL: '/images/brands/doacoesMe_64x64.png',
		name: 'Doações'
	},
	{
		href: '/',
		imageURL: '/images/brands/feiraLivre_64x64.png',
		name: 'Feira Livre'
	},
	{
		href: '/',
		imageURL: '/images/brands/cidadao_64x64.png',
		name: 'Me cidadão'
	}
]

export default function ModulesButton() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<IconButton
				aria-label="Menu"
				variant="ghost"
				icon={<GridLayout12 />}
				size="sm"
				onClick={() => onOpen()}
			/>
			<Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xs">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">Módulos Social Me</DrawerHeader>
					<Box p={2}>
						<SimpleGrid columns={3} spacing={3}>
							{modules.map((item) => (
								<Link key={item.href} href={item.href}>
									<MotionFlex
										p={1}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										// borderWidth={1}
										borderRadius={4}
										direction="column"
										justify="center"
										align="center"
										_hover={{
											bg: `${process.env.NEXT_PUBLIC_COLOR_SCHEME}.100`,
											color: `${process.env.NEXT_PUBLIC_COLOR_SCHEME}.900`
										}}
									>
										<Image src={item.imageURL} alt={item.name} boxSize="32px" />
										<Text mt={1} textAlign="center">
											{item.name}
										</Text>
									</MotionFlex>
								</Link>
							))}
						</SimpleGrid>
					</Box>
				</DrawerContent>
			</Drawer>
		</>
	)
}
