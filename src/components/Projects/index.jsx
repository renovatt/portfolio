import React from 'react'
import * as S from './style'
import { CardProject } from '../CardProject'

import YuGiOh from '../../assets/thumbs/yu-gi-oh.jpg'
import Valorant from '../../assets/thumbs/valorant.png'
import Pokedex from '../../assets/thumbs/pokedex.png'
import Clock from '../../assets/thumbs/clock.png'

export const Projects = () => {
  return (
    <S.ProjectsContainer>
      <CardProject
        name='Yu-Gi-Oh'
        image={YuGiOh}
        link="https://yu-gi-oh-card-info.vercel.app/"
        description="Listagem de todas as cartas do famoso anime-jogo e suas informações." />

      <CardProject
        name='Valorant'
        image={Valorant}
        link="https://valorant-self.vercel.app/"
        description="Uma pequena apresentação de um dos jogos mais amados pelos Gamers" />

      <CardProject
        name='Pokedex-React'
        image={Pokedex}
        link="https://pokedex-snowy-seven.vercel.app/"
        description="A famosa Pokedex, consumo de API criada em react, dinâmnica e responsiva." />

      <CardProject
        name='Relógio Dinâmico'
        image={Clock}
        link="https://renovatt.github.io/relogio-dinamico/"
        description="Um relógio dinâmico que reflete em tese o dia a dia de uma pessoa."/>

      <CardProject
        name='Em breve'
        link="#"
        description="Estou trabalhando em mais um projeto." />

      <CardProject
        name='Name'
        link="#"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore aperiam ratione eos enim dolores assumenda" />

      <CardProject
        name='Name'
        link="#"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore aperiam ratione eos enim dolores assumenda" />

      <CardProject
        name='Name'
        link="#"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore aperiam ratione eos enim dolores assumenda" />
    </S.ProjectsContainer>
  )
}
