import React from 'react'
import * as S from './style'
import { RiCloseFill } from 'react-icons/ri'

export const Modal = ({ name, banner, thumbnail, link }) => {
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
                    <S.Thumbnail thumbnail={thumbnail}></S.Thumbnail>
                    <S.Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae quasi temporibus consequatur consequuntur enim in voluptas itaque natus libero corrupti eos vel, porro ipsam eligendi obcaecati sed debitis accusamus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae quasi temporibus consequatur consequuntur enim in voluptas itaque natus libero corrupti eos vel, porro ipsam eligendi obcaecati sed debitis accusamus!
                    </S.Description>
                </S.PreviewContainer>
            </S.ModalContent>
        </S.ModalContainer>
    )
}
