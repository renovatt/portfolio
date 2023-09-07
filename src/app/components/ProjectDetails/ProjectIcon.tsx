'use client'

import { useCallback } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

const ProjectCloseIcon = () => {
  const router = useRouter()

  const backPage = useCallback(() => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace('/views/projects')
    }
  }, [router])

  return (
    <RiCloseFill
      onClick={backPage}
      className="absolute -right-4 -top-2.5 h-8 w-8 cursor-pointer rounded-full bg-backgroundPrimary text-white transition-all ease-in hover:bg-white hover:text-textPrimary"
    />
  )
}

export default ProjectCloseIcon
