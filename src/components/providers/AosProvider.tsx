'use client'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Fragment, ReactNode, useEffect } from 'react'

export const AosProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Aos.init()
  }, [])

  return <Fragment>{children}</Fragment>
}
