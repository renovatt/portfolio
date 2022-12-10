import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    opacity: 0;
    background: #191919;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @keyframes fade{
    to{
      opacity: 1;
      transform: initial;
    }
}
`

export const HardSkills = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5rem 4rem;
    height: 100%;
`

export const SkillsIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 1rem;
    width: 30%;
`

export const Link = styled.a`
    display: flex;
    color: #ffffff;
    align-items: center;
    transition: .2s;

    svg{
        height: 100px;
        width: 100px;
        padding: .4rem;
        color: #ffffff;
        transition: .2s;
    }

    svg:hover{
        cursor: pointer;
        color: #f9004d;
        transform: scale(1.1);
    }

    &:hover{
        /* color: #f9004d; */
}
`

export const SkillsDescription = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #101010;
    height: 15rem;
    width: 50%;
    padding: 2rem;
`

export const SoftSkills = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0 4rem;
    height: 100%;
    background: #101010;
`

export const SoftTitle = styled.h2`
    color: #f9004d;
    margin-bottom: 1.5rem;
`

export const SoftListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`

export const SoftList = styled.h4`
    color: #fff;
    text-align: center;
    margin: .4rem;
    padding: .4rem;
    background: #000;
    font-weight: bold;
    transition: .2s;

    &:hover{
        cursor: default;
        color: #f9004d;
        background: #ffffff;
    }
`