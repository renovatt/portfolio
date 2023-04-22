import React from 'react'
import * as S from './style'
import { ImageProps } from '../../../@types'

export const Image = ({ src, alt }: ImageProps) => {

  const [sketelon, setSkeleton] = React.useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    setSkeleton(false)
    event.currentTarget.style.opacity = "1";
  }

  return (
    <S.ImageContainer>
      {sketelon && <S.Skeleton></S.Skeleton>}
      <S.Image onLoad={handleLoad} src={src} alt={alt} />
    </S.ImageContainer>
  )
}