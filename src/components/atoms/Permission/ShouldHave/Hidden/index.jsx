import { useState, useEffect, memo } from 'react'
import { usePermission } from 'contexts/Permission/Provider'

import CheckPermission from './components/Checking'

function ShouldHavePermission({ children, permissions }) {
	const [loading, setLoading] = useState(true)
	const [isPermited, setIsPermited] = useState(false)

	const userPermissions = usePermission().permissions

	useEffect(() => {
		async function loadAsync() {
			setLoading(true)

			let hasPermission = false

			if (permissions) {
				hasPermission = await userPermissions.some((item) => {
					const isAdmin = item === 'ALERTS-INSTITUTION-GOD'

					return isAdmin || permissions.includes(item)
				}, [])
			} else {
				hasPermission = true
			}

			if (hasPermission) {
				setIsPermited(true)
			} else {
				setIsPermited(false)
			}

			if (userPermissions.length === 0) {
				setIsPermited(false)
			}

			setLoading(false)
		}

		if (userPermissions !== null) loadAsync()
	}, [userPermissions])

	return (
		!loading && (
			<CheckPermission isPermited={isPermited}>{children}</CheckPermission>
		)
	)
}

export default memo(ShouldHavePermission)
