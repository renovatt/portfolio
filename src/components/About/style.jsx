import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #191919;
    padding: 0 8rem;
    height: 90vh;
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @media(max-width: 70rem) {
        flex-direction: column;
        height: auto;
      }

    img{
        width: 30rem;
        margin-right: 2rem;

        @media(max-width: 70rem) {
        margin-top: 2rem;
        width: 10rem;
      }
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

    @media(max-width: 50rem) {
        width: auto;
        height: auto;
        margin-bottom: 4rem;
      }
`

export const title = styled.h1`
    color: #f9004d;
    font-size: 4rem;
`

export const text = styled.p`
    color: #929d8d;
    font-size: 1.3rem;
    text-align: justify;
`