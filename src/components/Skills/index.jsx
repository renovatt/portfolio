import React from 'react'
import { FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import * as S from './style'

export const Skills = () => {
  return (
    <S.SkillsContainer>
      <S.HardSkills>
        <S.SkillsIcons>
          <S.Link><FaHtml5 /></S.Link>
          <S.Link><FaCss3Alt /></S.Link>
          <S.Link><SiJavascript /></S.Link>
          <S.Link><FaReact /></S.Link>
          <S.Link><FaGitAlt /></S.Link>
          <S.Link><FaGithub /></S.Link>
        </S.SkillsIcons>

        <S.SkillsDescription>
          <S.Title>Name</S.Title>
          <S.Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus deleniti quia, nihil ab veniam veritatis aut nobis. nihil ab veniam veritatis aut nobis, nihil ab veniam veritatis aut nobis nihil ab veniam veritatis aut nobis.</S.Description>
        </S.SkillsDescription>
      </S.HardSkills>

      <S.SoftSkills>
        <S.SoftTitle>SoftSkills</S.SoftTitle>
        <S.SoftListContainer>
          <S.SoftList>Organização</S.SoftList>
          <S.SoftList>Gosto de aprender</S.SoftList>
          <S.SoftList>Trabalho em equipe</S.SoftList>
          <S.SoftList>Esforçado</S.SoftList>
          <S.SoftList>Colaboração</S.SoftList>
          <S.SoftList>Comunicação</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
          <S.SoftList>SoftSkill</S.SoftList>
        </S.SoftListContainer>
      </S.SoftSkills>
    </S.SkillsContainer>
  )
}
