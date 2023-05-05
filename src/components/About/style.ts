import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--background-secundary);
    padding: 0 8rem;
    /* height: 90vh; */
    width: 100%;
    max-width: var(--max-width);
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @media(max-width: 70rem) {
        height: auto;
      }

    @media(max-width: 50rem) {
      justify-content: center;
      padding: 0 2rem;
    }

    @keyframes fade{
    to{
      opacity: 1;
      transform: initial;
    }
  }
`

export const AboutContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100%;

    @media(max-width: 70rem) {
        flex-direction: column;
        justify-content: center;
        height: auto;
        margin-top: 2rem;
      }

    img{
        width: 20rem;
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
    font-size: 1.1rem;
    text-align: justify;
`

export const MoreAboutButton = styled.button`
  height: 2.5rem;
  width: 10rem;
  padding: .2rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--text-white);
  background: var(--text-enphasis-1);
  transition: .2s;
  border-radius: .4rem;
  border: none;
  outline: none;
  margin: 1rem 0;

  &:hover{
    cursor: pointer;
    color: var(--text-enphasis-1);
    background: var(--background-primary);
  }
`