/* eslint-disable @next/next/no-img-element */
'use client'
import { Fragment, useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ProjectsTypeProps } from '@types'
import { RiCloseFill } from 'react-icons/ri'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import BackgroundImage from './BackgroundImage'

const ProjectInfo = ({ ...props }: ProjectsTypeProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [loadingImage, setLoadingImage] = useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = '1'
    setLoadingImage(false)
  }

  const handleBackPage = useCallback(() => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace('/views/projects')
    }
  }, [router])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto" onClick={handleBackPage}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex min-h-full items-center justify-center p-6 text-center"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-2xl transform space-y-4 overflow-hidden rounded-2xl bg-primary-850 p-4 align-middle shadow-xl transition-all">
                <BackgroundImage image="bg-projects animate-fade -z-10" />
                <RiCloseFill
                  onClick={handleBackPage}
                  className="absolute right-4 top-0 h-8 w-8 cursor-pointer rounded-lg bg-primary-750 font-bold text-primary-950 transition-all ease-in hover:bg-primary-950 hover:text-primary-750"
                />
                <Dialog.Title
                  as="h1"
                  className="text-center text-lg font-medium leading-6 text-primary-750"
                >
                  {props.project_name}
                </Dialog.Title>
                <section className="flex h-full w-full items-center justify-center">
                  <figure
                    className={`h-full w-full rounded-lg transition-all ease-in ${
                      loadingImage ? 'animate-pulse' : ''
                    } bg-zinc-900`}
                  >
                    <Image
                      className="h-full w-full rounded-lg object-cover opacity-0"
                      src={props.thumbnail_url}
                      alt={props.project_name}
                      onLoad={handleLoad}
                      width={1000}
                      height={1000}
                      priority
                      fetchPriority="high"
                      decoding="async"
                      data-nimg="1"
                    />
                  </figure>
                </section>
                <Dialog.Description className="text-justify text-secondary-850">
                  {props.description}
                </Dialog.Description>
                <section className="flex w-full items-center justify-between">
                  <span className="flex flex-wrap items-center justify-start gap-1">
                    {props.techs.links.map((tech) => (
                      <span
                        key={tech.id}
                        className="mx-1 my-0 flex h-6 w-6 items-center justify-center"
                      >
                        <figure className="-z-10 h-full w-full">
                          <img
                            className="h-full w-full object-cover"
                            src={tech.svg_link}
                            alt="svg-icon"
                          />
                        </figure>
                      </span>
                    ))}
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      className="rounded-lg bg-primary-750 p-2 text-base font-bold text-primary-950 transition-all ease-in hover:bg-primary-950 hover:text-primary-750"
                      href="https://github.com/renovatt"
                      target="_blank"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      className="rounded-lg bg-primary-750 p-2 text-base font-bold text-primary-950 transition-all ease-in hover:bg-primary-950 hover:text-primary-750"
                      href={props.deploy_url}
                      target="_blank"
                    >
                      <FiExternalLink />
                    </Link>
                  </div>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </motion.div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ProjectInfo
