'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ProjectsTypeProps } from '@types'
import { useRouter } from 'next/navigation'
import { BsArrowRight } from 'react-icons/bs'

const ProjectCard = ({ banner_url: bannerUrl, id }: ProjectsTypeProps) => {
  const router = useRouter()

  const handleRedirectToPageProject = () => {
    router.push(`/project/${id}`)
  }

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = '1'
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative m-2 h-72 w-44 cursor-pointer rounded-lg bg-700 bg-cover bg-center md:h-80 md:w-48"
      style={{ backgroundImage: `url(${bannerUrl})` }}
      onLoad={handleLoad}
      onClick={handleRedirectToPageProject}
    >
      <article className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-lg border border-zinc-800 py-6 transition-all ease-in-out hover:bg-700">
        <div className="bg-gradient-card absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-80"></div>
        <section className="absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-5 group-hover:xl:-translate-y-5">
          <section className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
            <Link
              href={`/project/${id}`}
              className="flex h-10 w-10 translate-y-[500%] items-center justify-center rounded-full border text-xl transition-all delay-75 duration-300 group-hover:translate-y-0"
            >
              <BsArrowRight />
            </Link>
          </section>
        </section>
      </article>
    </motion.section>
  )
}

export default ProjectCard
