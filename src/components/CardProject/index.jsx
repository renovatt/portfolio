import React from 'react'
import * as S from './style'

export const CardProject = ({ name, description, link, image }) => {
  return (
    <S.CardContainer image={image}>
      <S.ShadowContainer>
        <S.CardName>{name}</S.CardName>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CardLink href={link}>Ver projeto</S.CardLink>
      </S.ShadowContainer>
    </S.CardContainer>
  )
}
