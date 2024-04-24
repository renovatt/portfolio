'use client'
import { Fragment, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ToastifyProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Fragment>
      <ToastContainer />
      {children}
    </Fragment>
  )
}
