import styled from "styled-components";

export const ModalContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .8);

    @media(max-width: 60rem) {
        overflow-y: auto;
        /* padding: 2rem calc(4rem + 15px) 2rem 4rem; */
    }
`

export const ModalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
    width: 80%;
    opacity: 0;
    border-radius: .4rem;
    background: var(--background-secundary);
    transform: translateX(-20px);
    animation: fade .3s forwards;
    
    @media(max-width: 70rem) {
        height: auto;
        padding: .8rem .4rem;
    }

    @media(max-width: 60rem) {
        flex-direction: column;
        margin-top: 35rem;
        margin-bottom: 5rem;
    }

    svg {
        top: -10px;
        right: -1rem;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: var(--text-enphasis-1);
        transition: .2s;
        color: var(--text-white);
        position: absolute;

        &:hover{
            cursor: pointer;
            color: var(--text-enphasis-1);
            background: var(--text-white);
        }
    }

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
`

export const BannerContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

export const Banner = styled.div`
    height: 25rem;
    width: 15rem;
    margin: 0 2rem;
    min-width: 15rem;
    border-radius: .4rem;
    background: var(--background-third);
    background-size: cover;
    background-position: center center;
    background-image: url(${props => props.banner});

    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @media(max-width: 60rem) {
        margin-top: 2rem;
    }

    @keyframes fade{
        to{
            opacity: 1;
            transform: initial;
        }
    }
`
export const Shadow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    transition: .2s;
    padding: 1.5rem 0;
    border-radius: .4rem;
    transition: .3s;

    &:hover{
        box-shadow: 1px 1px 10px var(--text-enphasis-1);
        background-color: var(--background-shadow);
    }
`

export const BannerName = styled.h1`
    text-align: center;
    color: var(--text-enphasis-1);
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 3px 5px #000;
`

export const BannerDeploy = styled.a`
    border: none;
    font-size: 1rem;
    font-weight: bold;
    padding: .4rem 4rem;
    border-radius: .4rem;
    transition: .2s;
    color: var(--text-enphasis-1);
    background: var(--background-primary);

    &:hover{
        cursor: pointer;
        color: var(--text-white);
        background: var(--text-enphasis-1);
    }
`

export const PreviewContainer = styled.section`    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: .4rem;

    @media(max-width: 70rem) {
        height: auto;
    }

    @media(max-width: 60rem) {
        margin-top: 2rem;
    }
`

export const Thumbnail = styled.img`
    width: 100%;
    height: 25rem;
    opacity: 0;
    object-fit: cover;   
    border-radius: .4rem;
    transition: .2s;

    @media(max-width: 70rem) {
        height: 100%;
    }
`

export const Description = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    height: 10rem;
    padding: .4rem;
    /* font-weight: bold; */
    margin: 0 .4rem;
    color: var(--text-white);
    /* text-shadow: 2px 3px 5px #000; */
    transition: .2s;
    width: 100%;

    @media(max-width: 60rem) {
        height: 100%;
    }
`