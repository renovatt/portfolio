'use client'

import { Loader } from './Helper/Loader'
import { CardProject } from './CardProject'
import { NotFoundPage } from './Helper/NotFoundPage'
import useFetchData from '@/hooks/useFetchData'

export const ProjectsMap = () => {
  const {
    error,
    loading,
    projects
  } = useFetchData()

  return (
    <>
      {loading && <Loader />}
      {error && <NotFoundPage />}

      <section className='flex flex-wrap items-center justify-around bg-backgroundSecundary'>
        {projects && projects
          .sort((a, b) => a.order - b.order)
          .map(project => (
            <CardProject key={project.id} {...project} />
          ))}
      </section>
    </>
  )
}