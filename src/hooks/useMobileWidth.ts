import { useEffect, useState } from 'react'

export const useMobileWidth = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768,
  )

  useEffect(() => {
    function handleResize() {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return { isMobile }
}
