import React from 'react'
import { Image } from '../Helper/Image'
import thumb from '../../assets/about.png'
import * as S from './style'

export const About = () => {
  return (
    <S.AboutContainer>
      <Image src={thumb} alt='thumb' />
      <S.Description>
        <S.title>Quem sou eu?</S.title>
        <S.text>
          Sou um jovem que procura por oportunidades, busco aprimorar meus conhecimentos em tecnologia diariamente, e atualmente estou bastante focado no Frond-end.
        </S.text>
        <S.text>
          Meu primeiro contato com linguagem de programação foi em 2015, durante o curso de Técnico em Eletroeletrônica, com C++, onde ainda brinquei um pouco com Arduino, mas infelizmente não acabei seguindo nesse caminho, em novembro de 2021, decidi recomeçar nesse mundo incrível da tecnologia, me encontrei com o JavaScript e aqui estou com foco e consistência, buscando por aprendizado para alcançar meus objetivos.
        </S.text>
      </S.Description>
    </S.AboutContainer>
  )
}
