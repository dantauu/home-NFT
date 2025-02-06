import { useEffect, useState } from 'react'

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query)
		const listner = (e) => setMatches(e.matches)

		mediaQueryList.addEventListener('change', listner)

		setMatches(mediaQueryList.matches)

		return () => {
			mediaQueryList.removeEventListener('change', listner)
		}
	}, [query])
	return matches
}

export default useMediaQuery