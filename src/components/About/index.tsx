import React from 'react'
import { Image } from '../Helper/Image'
import thumb from '../../assets/about.png'
import * as S from './style'
import { MoreAbout } from '../MoreAbout'

export const About = () => {
  const [moreAbout, setMoreAbout] = React.useState(false)
  const [moreAboutButton, setMoreAboutButton] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent = window.navigator.userAgent
    const mobileRegex = /(android|iphone|ipad|mobile)/i
    setIsMobile(mobileRegex.test(userAgent))
  })

  function handleAbout() {
    setMoreAbout(true)
    setMoreAboutButton(false)

    isMobile && setTimeout(() => {
      window.scrollTo(0, 1120)
    }, 10)

    !isMobile && setTimeout(() => {
      window.scrollTo(0, 820)
    }, 10)
  }

  return (
    <S.AboutContainer>
      <S.AboutContent>
        <Image src={thumb} alt='thumb' />
        <S.Description>
          <S.title>Quem sou eu?</S.title>
          <S.text>
            Sou um desenvolvedor Front-end com habilidades para criar aplicações web modernas e responsivas. Tenho uma mentalidade de aprendizado constante, sempre atualizando minhas habilidades para acompanhar as tendências tecnológicas. Além disso, sou uma pessoa colaborativa e estou sempre disposto a trabalhar em equipe para alcançar metas comuns. Busco constantemente novas oportunidades para crescer profissionalmente e contribuir para o sucesso de projetos e equipes.
          </S.text>
          <S.text>
            Estou disponível e ansioso para resolver problemas e oferecer assistência sempre que necessário.
            Atualmente, estou procurando ativamente uma posição em que possa utilizar minhas habilidades para impactar positivamente o mundo.
            Estou comprometido em aprimorar constantemente minhas habilidades e conhecimentos para me manter atualizado no campo da tecnologia. Estou confiante de que posso contribuir de forma significativa para o sucesso de projetos e equipes, e estou entusiasmado em explorar novas oportunidades que possam surgir.
          </S.text>
        </S.Description>
      </S.AboutContent>
      {moreAboutButton &&
        <S.MoreAboutButton onClick={handleAbout}>Mais sobre mim</S.MoreAboutButton>}
      {moreAbout && <MoreAbout />}
    </S.AboutContainer>
  )
}
