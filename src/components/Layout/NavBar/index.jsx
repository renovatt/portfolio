import React from 'react'
import * as S from './style'
// import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <S.NavBarContainer>
            <S.NavBarList>
                <S.NavItem><S.NavLink to='/'>Home</S.NavLink></S.NavItem>
                <S.NavItem><S.NavLink to='/about'>Quem sou eu</S.NavLink></S.NavItem>
                <S.NavItem><S.NavLink to='/projects'>Projetos</S.NavLink></S.NavItem>
                <S.NavItem><S.NavLink to='/skills'>Skills & SoftSkills</S.NavLink></S.NavItem>
            </S.NavBarList>
        </S.NavBarContainer>
    )
}
