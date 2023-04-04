import React from 'react'
import * as S from './style'

export const SkillDescripton = ({ skillName, skillDescription }) => {
    return (
        <S.SkillsDescription>
            <S.Title>{skillName}</S.Title>
            <S.Description>{skillDescription}</S.Description>
        </S.SkillsDescription>
    )
}