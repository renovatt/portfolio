import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #191919;
    border-top: 1px solid #929d8d;
    height: 5rem;
    margin: 0 2rem;
`
export const FooterDescription = styled.div`
    display: flex;
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
`

export const FooterCopyright = styled.span`
    margin: .2rem;
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`

export const FooterLink = styled.a`
    display: flex;
    color: #ffffff;
    align-items: center;
    transition: .2s;

    svg{
        height: 25px;
        width: 25px;
        color: #ffffff;
        transition: .2s;
    }

    svg:hover{
        color: #f9004d;
        transform: scale(1.2);
    }

    &:hover{
        color: #f9004d;
    }
`