import styled from 'styled-components'

export const CardContainer = styled.section`
    height: 25rem;
    width: 15rem;
    margin: 2rem;
    min-width: 15rem;
    border-radius: .4rem;
    background: var(--background-third);
    background-size: cover;
    background-position: center center;
    background-image: url(${props => props.banner});

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
export const ShadowContainer = styled.div`
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

export const CardName = styled.h1`
    text-align: center;
    color: var(--text-enphasis-1);
    font-size: 2rem;
    font-weight: bold;
    /* text-shadow: 5px 5px 35px var(--background-third); */
`

export const CardLink = styled.button`
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