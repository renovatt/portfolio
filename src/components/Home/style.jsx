import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: #191919;
  opacity: 0;
  transform: translateX(-20px);
  animation: fade .3s forwards;

  img{
    width: 20rem;

    animation-name: fly;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

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
  display: flex;
  flex-direction: column;
  width: 50%;
  `
export const Name = styled.h1`
  color: #ffffff;
  font-size: 8rem;
  margin-left: 2rem;
`
export const SpanNomal = styled.span`
  color: #ffffff;
  font-size: 3rem;
`
export const SpanEffect = styled.span`
  color: #f9004d;
  font-size: 2.5rem;

  &::after{
    content: '|';
    margin-left: 8px;
    opacity: 1;
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
  color: #f9004d;
`