import React from 'react'
import { Modal } from '../Modal'
import * as S from './style'

export const CardProject = ({ id, name, banner }) => {
  const [projectID, setProjectID] = React.useState('')
  const [modal, setModal] = React.useState(null)

  function getId(e){
    setModal(true)
    setProjectID(e.target.id)
  }

  return (
    <>
      {modal && <Modal id={projectID} setModal={setModal}/>}
      <S.CardContainer banner={banner}>
        <S.ShadowContainer>
          <S.CardName>{name}</S.CardName>
          <S.CardLink id={id} onClick={getId}>Ver Detalhes</S.CardLink>
        </S.ShadowContainer>
      </S.CardContainer>
    </>
  )
}
