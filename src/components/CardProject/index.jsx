import React from 'react'
import * as S from './style'

export const CardProject = ({ id, name, banner }) => {
  return (
    <S.CardContainer banner={banner}>
      <S.ShadowContainer>
        <S.CardName>{name}</S.CardName>
        <S.CardLink id={id}>Ver Detalhes</S.CardLink>
      </S.ShadowContainer>
    </S.CardContainer>
  )
}
