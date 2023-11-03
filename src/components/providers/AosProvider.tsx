'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Fragment, useEffect } from 'react'

export type AOSProviderProps = {
  children: React.ReactNode
}

export const AosProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return <Fragment>{children}</Fragment>
}
