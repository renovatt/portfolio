'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export type ToastifyProviderProps = {
  children: React.ReactNode
}

const ToastifyProvider = ({ children }: ToastifyProviderProps) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  )
}

export default ToastifyProvider
