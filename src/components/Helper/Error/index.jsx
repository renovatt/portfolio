import React from 'react'
import * as S from './style'
import error from '../../../assets/error.png'
import { Image } from '../Image'

export const Error = () => {
    return (
        <S.ErrorContainer>
            <S.Error>
                <Image src={error} />
                <S.Message>Página não encontrada!</S.Message>
            </S.Error>
        </S.ErrorContainer>
    )
}
