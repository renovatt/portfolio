import React from 'react'
import * as S from './style'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const Footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()
    return (
        <S.Footer>
            <S.FooterDescription>
                <S.FooterCopyright>&copy; {currentYear} willcode | Powered by</S.FooterCopyright>
                <S.FooterLink href="https://www.linkedin.com/in/renovatt" target="_blank">renovatt</S.FooterLink>
            </S.FooterDescription>

            <S.SocialMedia>
                <S.FooterLink href="https://www.linkedin.com/in/renovatt" target="_blank">
                    <FaLinkedin />
                </S.FooterLink>

                <S.FooterLink href="https://github.com/renovatt" target="_blank">
                    <FaGithub />
                </S.FooterLink>
            </S.SocialMedia>
        </S.Footer>
    )
}
