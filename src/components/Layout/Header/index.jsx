import React from 'react'
import * as S from './style'

export const Header = () => {
    return (
        <S.Header>
            <S.Logo>
                <S.NormalSpan>Will</S.NormalSpan>
                <S.ColorSpan>Code</S.ColorSpan>
            </S.Logo>
            <S.NavBar>
                <S.List>
                    <S.ItemList><S.Link>Quem sou eu</S.Link></S.ItemList>
                    <S.ItemList><S.Link>Projetos</S.Link></S.ItemList>
                    <S.ItemList><S.Link>Skills & SoftSkills</S.Link></S.ItemList>
                    <S.ItemList><S.Link>Contato</S.Link></S.ItemList>
                </S.List>
            </S.NavBar>
        </S.Header>
    )
}
