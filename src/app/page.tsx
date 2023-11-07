'use client'
import { useEffect } from 'react'
import Loader from '@helpers/Loader'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  useEffect(() => {
    router.push('/home')
  }, [router])
  return <Loader />
}
