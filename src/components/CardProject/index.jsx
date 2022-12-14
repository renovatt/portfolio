import React from 'react'
import { Modal } from '../Modal'
import * as S from './style'

export const CardProject = ({ id, name, banner }) => {
  const [projectID, setProjectID] = React.useState('')
  const [modal, setModal] = React.useState(null)

  function handleGetID(e) {
    setModal(true)
    setProjectID(e.target.id)
  }

  function handleLoad({ target }) {
    target.style.opacity = 1
  }

  return (
    <>
      {modal && <Modal id={projectID} setModal={setModal} />}
      <S.CardContainer banner={banner} onLoad={handleLoad}>
        <S.ShadowContainer>
          <S.CardName>{name}</S.CardName>
          <S.CardLink id={id} onClick={handleGetID}>Ver Detalhes</S.CardLink>
        </S.ShadowContainer>
      </S.CardContainer>
    </>
  )
}
