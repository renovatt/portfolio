import React from 'react'
import * as S from './style'

export const Image = ({src, alt }) => {

    const [sketelon, setSkeleton] = React.useState(true)

    function handleLoad({target}){
        setSkeleton(false)
        target.style.opacity = 1
    }

  return (
    <S.ImageContainer>
        {sketelon && <S.Skeleton></S.Skeleton> }
        <S.Image onLoad={handleLoad} src={src} alt={alt} />
    </S.ImageContainer>
  )
}