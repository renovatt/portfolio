import React from 'react'
import * as S from './style'
import { RiCloseFill } from 'react-icons/ri'

export const Modal = ({ name, banner, thumbnail, link, description }) => {
    return (
        <S.ModalContainer>
            <S.ModalContent>
                <RiCloseFill />
                <S.BannerContainer>
                    <S.Banner banner={banner}>
                        <S.Shadow></S.Shadow>
                    </S.Banner>
                    <S.BannerName>{name}</S.BannerName>
                    <S.BannerDeploy href={link}>Deploy</S.BannerDeploy>
                </S.BannerContainer>

                <S.PreviewContainer>
                    <S.Thumbnail src={thumbnail}></S.Thumbnail>
                    <S.Description>{description}</S.Description>
                </S.PreviewContainer>
            </S.ModalContent>
        </S.ModalContainer>
    )
}
