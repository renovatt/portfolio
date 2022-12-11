import React from 'react'
import * as S from './style'

export const CardProject = ({ name, image }) => {
  return (
    <S.CardContainer image={image}>
      <S.ShadowContainer>
        <S.CardName>{name}</S.CardName>
        <S.CardLink>Ver Detalhes</S.CardLink>
      </S.ShadowContainer>
    </S.CardContainer>
  )
}
