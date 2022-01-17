import { forwardRef, memo } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { Search1 } from 'components/atoms/Icons/Interface'

import useDebounce from 'hooks/useDebounce'

const SearchInput = forwardRef(({ onChange, onBlur, name, ...rest }, ref) => {
	const handleOnChangeDebounce = useDebounce((event) => {
		onChange(event)
	})

	return (
		<InputGroup
			maxW={{ base: '100%', md: '250px' }}
			mb={{ base: '4', md: '0' }}
			{...rest}
		>
			<InputLeftElement>
				<Search1 transition="all 0.4s" boxSize={6} color="gray.300" />
			</InputLeftElement>
			<Input
				ref={ref}
				onBlur={onBlur}
				name={name}
				onChange={handleOnChangeDebounce}
				rounded="md"
				autoComplete="off"
				placeholder="Pesquisar"
			/>
		</InputGroup>
	)
})

export default memo(SearchInput)
