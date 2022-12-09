import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 45rem) {
        display: none;
  }
`
export const NavBarList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavItem = styled.li`
    padding: .4rem;
    margin: .4rem;
`

export const NavLink = styled(Link)`
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: bold;
    transition: .2s;

    &:hover,
    &focus{
        color: #f9004d;
        cursor: pointer;
    }
    &:active{
        color: #f9004d;
    }
`