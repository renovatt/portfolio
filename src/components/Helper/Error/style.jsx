import styled from "styled-components";

export const ErrorContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
    width: 100%;
    padding: 0 6rem;
    background: transparent;
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @keyframes fade{
    to{
      opacity: 1;
      transform: initial;
    }
}
`

export const Error = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 15rem;
        height: 15rem;
    }
`

export const Message = styled.h1`
    text-align: center;
    color: #f61b12;
    font-size: 3rem;
    margin-top: 2rem;
`