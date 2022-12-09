import styled from 'styled-components'

export const CardContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 20rem;
    width: 15rem;
    min-width: 15rem;
    margin: 2rem;
    border-radius: .4rem;
    background: #101010;
`

export const CardName = styled.h1`
    text-align: center;
    color: #f9004d;
`
export const CardDescription = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 8rem;
    margin-bottom: 2rem;
    color: #929d8d;
`
export const CardLink = styled.a`
    margin-top: .4rem;
    padding: .4rem 4rem;
    border-radius: .4rem;
    background: #000;
    color: #ffffff;
    transition: .2s;
    font-weight: bold;

&:hover{
    color: #f9004d;
    background: #ffffff;
}
`