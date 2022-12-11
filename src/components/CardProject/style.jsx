import styled from 'styled-components'

export const CardContainer = styled.section`
    height: 25rem;
    width: 15rem;
    margin: 2rem;
    min-width: 15rem;
    border-radius: .4rem;
    background: #101010;
    background-size: cover;
    background-position: center center;
    background-image: url(${props => props.image});

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
        box-shadow: 1px 1px 10px #f9004d;
        background-color: #00000041;
    }
`

export const CardName = styled.h1`
    text-align: center;
    color: #f9004d;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 3px 5px #000;
`

export const CardLink = styled.button`
    border: none;
    font-size: 1rem;
    font-weight: bold;
    padding: .4rem 4rem;
    border-radius: .4rem;
    transition: .2s;
    color: #f9004d;
    background: #ffffff;

    &:hover{
        cursor: pointer;
        color: #ffffff;
        background: #f9004d;
    }
`

// export const CardDescription = styled.p`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     height: 8rem;
//     opacity: 0;
//     font-weight: bold;
//     margin: 0 .4rem;
//     color: #ffffff;
//     text-shadow: 2px 3px 5px #000;
//     transition: .2s;

//     &:hover{
//         opacity: 1;
// }
// `