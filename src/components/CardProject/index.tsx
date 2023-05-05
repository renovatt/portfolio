import React from 'react'
import { Modal } from '../Modal'
import * as S from './style'
import { ProjectsTypeProps } from '../../@types'

export const CardProject = ({ id, name, banner }: ProjectsTypeProps) => {
  const [projectID, setProjectID] = React.useState('')
  const [modal, setModal] = React.useState(false)

  function handleGetProjectID(id: string) {
    setModal(true)
    setProjectID(id)
  }

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = "1";
  }

  return (
    <>
      {modal && <Modal id={projectID} setModal={setModal} />}
      <S.CardContainer banner={banner} onLoad={handleLoad}>
        <S.ShadowContainer>
          <S.CardName>{name}</S.CardName>
          <S.CardLink id={id} onClick={() => handleGetProjectID(id)}>Ver Detalhes</S.CardLink>
        </S.ShadowContainer>
      </S.CardContainer>
    </>
  )
}
