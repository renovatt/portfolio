'use client'

import { useCallback } from "react";
import { RiCloseFill } from 'react-icons/ri'
import { useRouter } from "next/navigation";

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
            className='absolute -top-2.5 -right-4 w-8 h-8 rounded-full bg-backgroundPrimary transition-all ease-in text-white hover:text-textPrimary hover:bg-white cursor-pointer' />
    )
}

export default ProjectCloseIcon;