import React from 'react'
import * as S from './style'
import profile from '../../assets/profile-1.jpg'

export const MoreAbout = () => {

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        event.currentTarget.style.opacity = "1";
    }

    return (
        <S.MoreAboutContainer>
            <S.ProfileContainer>
                <S.ProfileImage src={profile} alt={"Will-Anime"} onLoad={handleLoad} />
            </S.ProfileContainer>

            <S.DescriptionContainer>
                <S.Description>
                    Eu sou louco por música! Sempre estou ouvindo algo para relaxar ou me concentrar, e toco guitarra há alguns anos - é meu maior lazer e paixão. Minha banda favorita é Oficina G3. Também curto jogos, especialmente os mobiles, que se tornaram minha diversão e onde conheci pessoas de vários lugares do Brasil e do mundo. Fiz boas amizades por meio dos jogos, algumas delas eu mantenho até hoje. Aprendi e aprimorei meu inglês jogando, e embora ainda não seja fluente, consigo me comunicar bem. Sempre fui um cara bem reservado, mas adoro ajudar pessoas naquilo que posso. Recentemente, tenho me dedicado ao desenvolvimento front-end e estou mergulhado no mundo da tecnologia, me dedicando ao máximo a cada dia.
                </S.Description>
            </S.DescriptionContainer>
        </S.MoreAboutContainer>
    )
}
