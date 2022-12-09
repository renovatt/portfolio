import React from 'react'
import { Image } from '../Helper/Image'
import thumb from '../../assets/about.png'
import * as S from './style'

export const About = () => {
  return (
    <S.AboutContainer>
      <Image src={thumb} alt='thumb'/>
      <S.Description>
        <S.title>Quem sou eu?</S.title>
        <S.text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus deleniti quia, nihil ab veniam veritatis aut nobis fuga molestiae obcaecati ipsa amet mollitia accusantium eum quas excepturi? Quas, hic velit.</S.text>
      </S.Description>
    </S.AboutContainer>
  )
}
