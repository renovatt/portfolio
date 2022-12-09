import React from 'react'
import { NavBar } from '../NavBar'
import * as S from './style'

export const Header = () => {
    return (
        <S.Header>
            <S.Logo to='/'>
                <S.NormalSpan>Will</S.NormalSpan>
                <S.ColorSpan>Code</S.ColorSpan>
            </S.Logo>
            <NavBar/>
        </S.Header>
    )
}
