import React from 'react'
import *  as S from './style'
import { Image } from '../Helper/Image'
import logo from '../../assets/logo.png'

export const Home = () => {
  return (
    <S.ThumbContainer>
      <S.Profile>
        <S.SpanNomal>Olá, eu sou</S.SpanNomal>
        <S.Name>Will.</S.Name>
        <S.SpanEffect>Front-end Developer</S.SpanEffect>
      </S.Profile>
      <Image src={logo} alt='logo'/>
    </S.ThumbContainer>
  )
}
