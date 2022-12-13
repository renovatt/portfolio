import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const MobileContainer = styled.nav`
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    display: flex;
    transition: .5s;
    position: absolute;
    align-items: center;
    pointer-events: none;
    justify-content: center;
    backdrop-filter: blur(3px);
    transform: translateY(50px);
    background: rgba(17, 18, 17, 0.95);
    background: linear-gradient(34deg, #2b161cef 0%, rgba(17,18,17,0.95) 95%);

    svg {
        top: 2rem;
        right: 2rem;
        width: 25px;
        height: 25px;
        transition: .7s;
        color: var(--text-white);
        position: absolute;
        transform: rotate(45deg);

        &:hover{
            cursor: pointer;
        }
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);

        svg {
        transform: rotate(0deg);
        }`
    }
`
export const MobileList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: scale(0.8);
    transition: .3s;
    gap: 2rem;
`

export const MobItem = styled.li`
    padding: .4rem;
    margin: .4rem;
`

export const MobLink = styled(Link)`
    color: var(--text-white);
    font-size: 2.3rem;
    font-weight: bold;
    transition: .2s;

    &:hover,
    &focus{
        color: var(--text-enphasis-1);
        cursor: pointer;
    }
    &:active{
        color: var(--text-enphasis-2);
    }
`