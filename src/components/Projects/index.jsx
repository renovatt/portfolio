import React from 'react'
import * as S from './style'
import { CardProject } from '../CardProject'

import Default from '../../assets/thumbs/default.png'
import YuGiOh from '../../assets/thumbs/yu-gi-oh.jpg'
import Valorant from '../../assets/thumbs/valorant.png'
import Pokedex from '../../assets/thumbs/pokedex.png'
import Clock from '../../assets/thumbs/clock.png'

export const Projects = () => {
  return (
    <S.ProjectsContainer>
      <CardProject name='Yu-Gi-Oh' image={YuGiOh} />
      <CardProject name='Valorant' image={Valorant} />
      <CardProject name='Pokédex-React' image={Pokedex} />
      <CardProject name='Relógio Dinâmico' image={Clock} />
      <CardProject name='Em Breve' image={Default} />
      <CardProject name='Name' image={Default} />
      <CardProject name='Name' image={Default} />
      <CardProject name='Name' image={Default} />
    </S.ProjectsContainer>
  )
}
