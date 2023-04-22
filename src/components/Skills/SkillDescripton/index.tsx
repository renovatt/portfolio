import { SkillDescriptonTypeProps } from '../../../@types'
import * as S from './style'

export const SkillDescripton = ({ skillName, skillDescription }: SkillDescriptonTypeProps) => {
    return (
        <S.SkillsDescription>
            <S.Title>{skillName}</S.Title>
            <S.Description>{skillDescription}</S.Description>
        </S.SkillsDescription>
    )
}