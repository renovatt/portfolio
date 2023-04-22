import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
  width: 100%;
  padding: 0 6rem;
  background: var(--background-secundary);
  opacity: 0;
  transform: translateX(-20px);
  animation: fade .3s forwards;

  @media(max-width: 50rem) {
        padding: 0;
        justify-content: center;
        flex-direction: column-reverse;
      }

  img{
    width: 20rem;
    animation-name: fly;
    animation-delay: 1s;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    @media(max-width: 50rem) {
        width: 10rem;
      }

  @keyframes fade{
    to{
      opacity: 1;
      transform: initial;
    }
  }

  @keyframes fly {
    from{
        position: relative;
        top: 0px;
    }
    to{
      position: relative;
      top: -20px;
      bottom: 60px;
    }
  }
}
`
export const Profile = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media(max-width: 50rem) {
        align-items: center;
      }
  `
export const Name = styled.h1`
  color: var(--text-white);
  font-size: 8rem;
  margin-left: 2rem;
`
export const SpanNomal = styled.span`
  color: var(--text-white);
  font-size: 3rem;
`
export const SpanEffect = styled.span`
  color: var(--text-enphasis-1);
  font-size: 2.5rem;

  @media(max-width: 50rem) {
      font-size: 1.5rem;
        text-align: center;
      }

  &::after{
    content: '|';
    opacity: 1;
    margin-left: 8px;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
}
`

export const Dot = styled.span`
  color: var(--text-enphasis-1);
`