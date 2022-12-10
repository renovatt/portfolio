import React from 'react'
import *  as S from './style'
import { Image } from '../Helper/Image'
import logo from '../../assets/logo.png'

export const Home = () => {

  const [text, setText] = React.useState('');
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => prevText + "Front-end Developer".charAt(index));
      setIndex(prevIndex => prevIndex + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <S.HomeContainer>
      <S.Profile>
        <S.SpanNomal>Olá, eu sou</S.SpanNomal>
        <S.Name>Will<S.Dot>.</S.Dot></S.Name>
        <S.SpanEffect>{text}</S.SpanEffect>
      </S.Profile>
      <Image src={logo} alt='logo' />
    </S.HomeContainer>
  )
}
