import React from 'react'
import { FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import * as S from './style'

export const Skills = () => {
  return (
    <S.SkillsContainer>
      <S.SkillsContent>
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
      </S.SkillsContent>

      <S.SoftSkills>
        <S.Link>Teste</S.Link>
      </S.SoftSkills>
    </S.SkillsContainer>
  )
}
