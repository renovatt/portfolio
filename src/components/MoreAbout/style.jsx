import styled from "styled-components";

export const MoreAboutContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 4rem;
    width: 100%;
    height: 100vh;
    margin-top: 5rem;
    margin-bottom: 2rem;

    opacity: 0;
    transform: translateY(-20px);
    animation: fade .3s forwards;

    @keyframes fade{
    to{
      opacity: 1;
      transform: initial;
    }
  }

  @media(max-width: 70rem) {
        height: auto;
        padding: 0;
      }

    @media(max-width: 60rem) {
      flex-direction: column;
    }
`

export const ProfileContainer = styled.div`
    height: 35rem;
    width: 22rem;

    @media(max-width: 70rem) {
        height: auto;
        padding: 0 .2rem;
      }

    @media(max-width: 50rem) {
      justify-content: center;
      padding: 0 2rem;
    }
`

export const ProfileImage = styled.img`
    object-fit: cover;
    border-radius: .4rem;
    width: 100%;
    height: 100%;
    border: 1px solid var(--text-enphasis-1);
`

export const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .2rem;
    height: 35rem;
    width: 40%;
    padding: 0 .8rem;

    @media(max-width: 70rem) {
        height: auto;
        width: 100%;
        padding: 0 .2rem;
      }
`
export const Description = styled.p`
    text-align: justify;
    color: var(--text-description);
    padding: 0 .2rem;
    font-size: 1.3rem;
`