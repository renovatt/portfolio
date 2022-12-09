import React from 'react'
import * as S from './style'

export const CardProject = () => {
  return (
    <S.CardContainer>
      <S.CardName>Name</S.CardName>
      <S.CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur, autem eos dolore debitis necessitatibus sapiente voluptate impedit.
      </S.CardDescription>
      <S.CardLink href="#">Ver projeto</S.CardLink>
    </S.CardContainer>
  )
}
