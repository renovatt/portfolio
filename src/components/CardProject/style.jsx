import styled from 'styled-components'

export const CardContainer = styled.section`
    height: 20rem;
    width: 15rem;
    min-width: 15rem;
    margin: 2rem;
    border-radius: .4rem;
    background: #101010;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;

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
    justify-content: space-around;
    flex-direction: column;
    background-color: #0000008d;
    height: 100%;
    border-radius: .4rem;
`

export const CardName = styled.h1`
    text-align: center;
    color: #f9004d;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 3px 5px #000;
`
export const CardDescription = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 8rem;
    font-weight: bold;
    margin: 0 .4rem;
    color: #ffffff;
    text-shadow: 2px 3px 5px #000;
`
export const CardLink = styled.a`
    margin-bottom: 0;
    padding: .4rem 4rem;
    border-radius: .4rem;
    background: #ffffff;
    color: #f9004d;
    transition: .2s;
    font-weight: bold;

&:hover{
    color: #ffffff;
    background: #f9004d;
}
`