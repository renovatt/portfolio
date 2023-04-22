import React from 'react'
import * as S from './style'
import { RiCloseFill } from 'react-icons/ri'
import { MenuMobileTypeProps } from '../../../@types'

export const MenuMobile = ({ mobileIsVisible, setMobileIsVisible }: MenuMobileTypeProps) => {

    React.useEffect(() => {
        document.body.style.overflowY = mobileIsVisible ? 'hidden' : 'auto'
    }, [mobileIsVisible])

    return (
        <S.MobileContainer isVisible={mobileIsVisible}>
            <S.MobileList>
                <S.MobItem onClick={() => setMobileIsVisible(false)}>
                    <S.MobLink to='/'>Página Inicial</S.MobLink>
                </S.MobItem>
                <S.MobItem onClick={() => setMobileIsVisible(false)}>
                    <S.MobLink to='/about'>Quem sou eu</S.MobLink>
                </S.MobItem>
                <S.MobItem onClick={() => setMobileIsVisible(false)}>
                    <S.MobLink to='/projects'>Projetos</S.MobLink>
                </S.MobItem>
                <S.MobItem onClick={() => setMobileIsVisible(false)}>
                    <S.MobLink to='/skills'>HardSkills & SoftSkills</S.MobLink>
                </S.MobItem>
            </S.MobileList>
            <RiCloseFill onClick={() => setMobileIsVisible(false)} />
        </S.MobileContainer>
    )
}
