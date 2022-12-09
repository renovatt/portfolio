import styled from "styled-components";

export const ImageContainer = styled.div`
    display: grid;

    img{
        grid-area: 1/1;
        opacity: 0;
        transition: .2s;
    }
`
export const Skeleton = styled.div`
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(
    90deg,
    #24293f 0px,
    #060b28 50%,
    #24293f 100%
  );
  
    background-color: #24293f;
    background-size: 200%;
    border-radius: 50%;
    animation: loading 1.5s infinite linear;

    @keyframes loading{
    from {
        background-position: 0;
    }
    to {
        background-position: -200%;
    }
} 
`
