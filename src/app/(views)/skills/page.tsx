import { Metadata } from 'next'
import BackgroundImage from '@atoms/background-image'
import { Suspense } from 'react'
import { getStacks } from '@services/get-stacks.service'
import Loader from '@molecules/loader'
import { StacksResponseDto } from '@entities/stack.dto'
import { CustomError } from '@utils/custom-error'
import ErrorMessage from '@molecules/error-message'
import SideSkills from '@features/skills/templates/side-skills'
import RayImage from '@features/skills/atoms/ray-image'
import Icons from '@features/skills/molecules/icons'

export const metadata: Metadata = {
  title: 'Habilidades',
  description:
    'Em um cenário onde a tecnologia avança a passos largos, mantenho-me em constante busca pelo conhecimento e atualização.',
}

export default async function Skills() {
  let stacks: StacksResponseDto = []
  let error: CustomError | null = null

  try {
    stacks = await getStacks()
  } catch (err) {
    error = err as CustomError
  }

  return (
    <section className="relative flex h-screen w-screen flex-col justify-center overflow-hidden py-20 transition-all lg:p-0">
      <RayImage />
      <BackgroundImage image="bg-skills animate-fade" />
      <section className="z-10 my-2 flex h-full w-full flex-col items-center justify-start gap-10 space-y-10 overflow-y-auto overflow-x-hidden px-4 pb-20 md:space-y-0 md:pb-0 lg:flex-row lg:justify-around">
        <SideSkills />
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <aside className="grid grid-cols-3 gap-4 md:grid-cols-4">
            <Suspense fallback={<Loader />}>
              {stacks?.map((skill, index) => <Icons key={index} {...skill} />)}
            </Suspense>
          </aside>
        )}
      </section>
    </section>
  )
}
