import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    height: 5rem;
    background: #777;
    border-bottom: 1px solid #555;
`
export const Logo = styled.div`
    display: block;
    color: #eee;
    background: #333;
`
export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ItemList = styled.li`
    color: #eee;
    padding: .4rem;
    margin: .4rem;
    font-weight: bold;
    cursor: pointer;
`