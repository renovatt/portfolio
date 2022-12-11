import React from 'react'
import * as S from './style'
import { RiMenu3Line } from 'react-icons/ri'

export const NavBar = ({ setMobileIsVisible }) => {
    return (
        <S.NavBarContainer>
            <S.NavBarList>
                <S.NavItem><S.NavLink to='/'>Home</S.NavLink></S.NavItem>
                <S.NavItem><S.NavLink to='/about'>Quem sou eu</S.NavLink></S.NavItem>
                <S.NavItem><S.NavLink to='/projects'>Projetos</S.NavLink></S.NavItem>
                <S.NavItem><S.NavLink to='/skills'>HardSkills & SoftSkills</S.NavLink></S.NavItem>
                <RiMenu3Line onClick={() => setMobileIsVisible(true)} />
            </S.NavBarList>
        </S.NavBarContainer>
    )
}
