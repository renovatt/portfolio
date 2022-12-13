import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-secundary);
    padding: 0 8rem;
    height: 90vh;
    width: 100%;
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @media(max-width: 70rem) {
        flex-direction: column;
        height: auto;
        margin-top: 2rem;
      }

    @media(max-width: 50rem) {
      justify-content: center;
      padding: 0 4rem;
    }

    img{
        width: 20rem;
    }

    @keyframes fade{
    to{
      opacity: 1;
      transform: initial;
    }
  }
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 40rem;
    margin-left: 2rem;

    @media(max-width: 70rem) {
        width: 100%;
        height: auto;
        margin-top: 4rem;
        margin-bottom: 4rem;
        margin-left: 0;
      }
`

export const title = styled.h1`
    color: var(--text-enphasis-1);
    font-size: 4rem;

    @media(max-width: 50rem) {
        font-size: 2rem;
      }
`

export const text = styled.p`
    color: var(--text-description);
    font-size: 1.3rem;
    text-align: justify;
`