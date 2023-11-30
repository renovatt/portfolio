'use client'
import { useMobileWidth } from '@hooks/useMobileWidth'

const DefaultDescription = () => {
  const { isMobile } = useMobileWidth()
  return (
    <section className="flex min-h-[25rem] w-full items-center justify-center bg-primary-850 p-4 lg:min-h-[15rem]">
      {!isMobile ? (
        <h2 className="text-center text-xl text-secondary-850">
          Passe o mouse nos ícones para ver mais informações.
        </h2>
      ) : (
        <h2 className="text-center text-xl text-secondary-850">
          Toque nos ícones para ver mais informações.
        </h2>
      )}
    </section>
  )
}

export default DefaultDescription
