import React from 'react'
import { MenuMobile } from '../MenuMobile';
import { NavBar } from '../NavBar'
import * as S from './style'

export const Header = () => {
    const [mobileIsVisible, setMobileIsVisible] = React.useState(false);
    return (
        <S.Header>
            <S.Logo to='/'>
                <S.NormalSpan>Will</S.NormalSpan>
                <S.ColorSpan>Code</S.ColorSpan>
            </S.Logo>
            <NavBar mobileIsVisible={mobileIsVisible} setMobileIsVisible={setMobileIsVisible} />
            <MenuMobile
                mobileIsVisible={mobileIsVisible}
                setMobileIsVisible={setMobileIsVisible} />
        </S.Header>
    )
}
