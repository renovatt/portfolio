import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative flex h-screen flex-1 flex-col items-center justify-center">
      {children}
    </main>
  )
}

export default Container
