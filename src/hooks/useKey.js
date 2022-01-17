import { useEffect, useRef } from 'react'

export default function useKey(key, callback) {
	const callbackRef = useRef(callback)

	useEffect(() => {
		callbackRef.current = callback
	})

	useEffect(() => {
		function onKeyPress(event) {
			if (event.code === key) {
				callbackRef.current()
			}
		}

		document.addEventListener('keypress', onKeyPress)

		return () => document.removeEventListener('keypress', onKeyPress)
	}, [key])

	return null
}
