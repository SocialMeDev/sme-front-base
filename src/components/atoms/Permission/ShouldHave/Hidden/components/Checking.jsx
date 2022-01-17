import { memo } from 'react'

function Checking({ children, isPermited }) {
	return isPermited ? <div>{children}</div> : <div />
}

export default memo(Checking)
