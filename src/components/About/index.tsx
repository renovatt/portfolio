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
            Eu sou um jovem em busca de oportunidades, buscando aprimorar meus conhecimentos em tecnologia diariamente. Atualmente, estou bastante focado no desenvolvimento Front-end.
          </S.text>
          <S.text>
            Meu primeiro contato com linguagem de programação foi em 2015, durante o curso de Técnico em Eletroeletrônica, com C++. Lembro que ainda brinquei um pouco com Arduino, mas infelizmente não continuei seguindo nesse caminho. Em novembro de 2021, decidi recomeçar nesse mundo incrível da tecnologia, e me encontrei com o JavaScript. Desde então, estou me dedicando com foco e consistência, buscando por aprendizado para alcançar meus objetivos. Estou animado em poder expandir meu conhecimento em Front-end e, quem sabe, em outras áreas da programação também.
          </S.text>
        </S.Description>
      </S.AboutContent>
      {moreAboutButton &&
        <S.MoreAboutButton onClick={handleAbout}>Mais sobre mim</S.MoreAboutButton>}
      {moreAbout && <MoreAbout />}
    </S.AboutContainer>
  )
}
