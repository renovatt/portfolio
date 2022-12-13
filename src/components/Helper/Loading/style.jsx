import styled from "styled-components";

export const LoadingContainer = styled.section`
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

export const Loading = styled.h2`
    color: var(--text-white);
    text-align: center;
`

export const ProgressBar = styled.div`
    height: 8px;
    width: 30rem;
`

export const Bar = styled.div`
    height: 3px;
    width: 0;
    background: var(--text-enphasis-1);
    animation: load .3s forwards;

    @keyframes load {
        to{
            width: 100%;
        }
    }
`