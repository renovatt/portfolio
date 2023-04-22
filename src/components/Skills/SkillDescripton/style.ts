import styled from "styled-components"

export const SkillsDescription = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: var(--background-third);
    width: 100%;
    opacity: 0;
    transform: translateX(-20px);
    animation: skillFade .3s forwards;

    @keyframes skillFade{
    to{
      opacity: 1;
      transform: initial;
    }
}
`

export const Title = styled.h2`
    color: var(--text-enphasis-1);
    font-size: 1.5rem;
`

export const Description = styled.p`
    color: var(--text-description);
    font-size: 1.2rem;
`