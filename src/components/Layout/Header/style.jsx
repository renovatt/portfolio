import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    height: 5rem;
    background: #191919;
    border-bottom: 1px solid #929d8d;
`
export const Logo = styled(Link)`
    display: flex;
    font-size: 2rem;
    font-weight: bold;
`
export const NormalSpan = styled.span`
    display: block;
    color: #ffffff;
`
export const ColorSpan = styled.span`
    display: block;
    color: #f9004d;
`