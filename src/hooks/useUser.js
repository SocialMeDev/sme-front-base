import { useCallback } from 'react'
import { useAuth } from 'contexts/Auth/Provider'

import { capitalizeString } from 'utils/transforms/string'
import { brazilianTelephoneMask, cnpjMask, cpfMask } from 'utils/masks'

export default function useUser() {
	const { user } = useAuth()

	const getFullName = useCallback(() => {
		return capitalizeString(user.social_name || user.name)
	}, [user])

	const getAvatar = useCallback(() => {
		return user.avatar || ''
	}, [user])

	const getLogin = useCallback(() => {
		return cpfMask(user.cpf_number) || cnpjMask(user.cnpj_number)
	}, [user])

	const getLoginType = useCallback(() => {
		return user.kind === 'PF' ? 'CPF' : 'CNPJ'
	}, [user])

	const getContact = useCallback(() => {
		const contact = user.main_contact

		return contact.length < 12
			? brazilianTelephoneMask(contact)
			: contact.toLowerCase()
	}, [user])

	const getContactType = useCallback(() => {
		const contact = user.main_contact

		return contact.length === 13 ? 'Telefone ( +00 (00) 00000-0000 )' : 'Email'
	}, [user])

	return {
		getFullName,
		getContact,
		getContactType,
		getLogin,
		getLoginType,
		getAvatar
	}
}
