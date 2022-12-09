import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #191919;
    padding: 0 4rem;
    height: 90vh;
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    img{
        width: 30rem;
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
`

export const title = styled.h1`
    color: #f9004d;
    font-size: 4rem;
`

export const text = styled.p`
    color: #929d8d;
    font-size: 1.3rem;
`