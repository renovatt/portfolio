'use client'

import React from "react"
import { Modal } from './Modal'
import { ProjectsTypeProps } from "@/@types"
import Button from "./Button"
import { useToggle } from "@/hooks/useToggle"

export const CardProject = (props: ProjectsTypeProps) => {
  const [IdProject, setIdProject] = React.useState('')

  const {
    modal,
    openModal,
    closeModal,
    toggleModal } = useToggle()

  function handleGetProjectID(id: string) {
    openModal()
    setIdProject(id)
  }

  const handleLoad = (
    event: React.SyntheticEvent<HTMLImageElement>
  ): void => {
    event.currentTarget.style.opacity = "1";
  }

  return (
    <>
      {modal && (
        <Modal
          id={IdProject}
          closeModal={closeModal}
          toggleModal={toggleModal}
        />
      )}

      <section
        className='h-96 w-56 min-w-[15rem] rounded-lg bg-backgroundThird bg-cover bg-center m-4 cursor-pointer'
        style={{ backgroundImage: `url(${props.banner_url})` }}
        onLoad={handleLoad}
      >

        <article
          className="flex items-center justify-between flex-col h-full rounded-lg py-6 hover:bg-backgroundShadow border border-zinc-800 hover:border-textPrimary transition-all ease-in-out"
          onClick={() => handleGetProjectID(props.id)}
        >
          <h1 className="text-center text-textPrimary text-3xl font-bold">{props.project_name}</h1>

          <Button
            text='Ver Detalhes'
            onClick={() => handleGetProjectID(props.id)}
          />
        </article>
      </section>
    </>
  )
}