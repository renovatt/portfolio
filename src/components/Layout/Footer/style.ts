import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 5rem;
    margin: 0 2rem;
    background: var(--background-secundary);
    border-top: 1px solid var(--text-enphasis-1);

    @media(max-width: 40rem) {
        flex-direction: column;
        margin-bottom: 1rem;
      }
`
export const FooterDescription = styled.div`
    display: flex;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-white);
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
    color: var(--text-white);
    align-items: center;
    transition: .2s;

    svg{
        height: 25px;
        width: 25px;
        color: var(--text-white);
        transition: .2s;
    }

    svg:hover{
        color: var(--text-enphasis-1);
        transform: scale(1.2);
    }

    &:hover{
        color: var(--text-enphasis-1);
    }
`