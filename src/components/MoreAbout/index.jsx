import React from 'react'
import * as S from './style'
import profile from '../../assets/profile-1.jpg'

export const MoreAbout = () => {
    return (
        <S.MoreAboutContainer>
            <S.ProfileContainer>
                <S.ProfileImage src={profile} alt="" />
            </S.ProfileContainer>
            
            <S.DescriptionContainer>
                <S.Description>
                    Louco por música! Sempre estou ouvido algo para relaxar ou me concentrar, toco guitarra há alguns anos e isso é o meu maior lazer e paixão, minha banda favorita é Oficina G3. Curto games, não por opção, mas os mobiles é a minha diversão, foi nos jogos onde conheci pessoas de vários lugares do Brasil e do mundo, fiz boas amizades, e algumas delas tenho comigo até hoje. Também foi em jogos que aprendi e aprimorei meu inglês, não tenho fluência ainda, mas consigo me comunicar bem. Sempre fui um cara bem reservado, sempre fui de ajudar pessoas naquilo que podia. Estou mergulhado no mundo da tecnologia ultimamente focando no desenvolvimento front-end, estou me dedicando ao máximo a cada dia.
                </S.Description>
            </S.DescriptionContainer>
        </S.MoreAboutContainer>
    )
}
