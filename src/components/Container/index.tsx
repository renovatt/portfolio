import * as S from './style'
import { ContainerTypeProps } from '../../@types'

export const Container = ({ children }: ContainerTypeProps) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}
