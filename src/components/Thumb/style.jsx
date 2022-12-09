import styled from "styled-components";

export const ThumbContainer = styled.section`
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

  @keyframes fade{
    to{
      opacity: 1;
      transform: initial;
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
  margin-left: 5rem;
`
export const SpanNomal = styled.span`
  color: #ffffff;
  font-size: 3rem;
`
export const SpanEffect = styled.span`
  color: #f9004d;
  font-size: 2.5rem;
`