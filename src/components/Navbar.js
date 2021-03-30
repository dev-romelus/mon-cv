import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import SwitchToggle from './SwitchToggle'

const Navbar = ({ className }) => {
    return (
        <nav className={className}>
            <ul>
                <li>
                    <Link to='home'>Home</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
                <li>
                    <Link to='contact'>Contact</Link>
                </li>
            </ul>
            <SwitchToggle/>
        </nav>
    )
}

const StyledNavbar = styled(Navbar)`
    padding: 12px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > ul {
        display: flex;
        > li {
            padding-right: 12px;
            font-size: 18px;
            > a {
                color: inherit;
            }
        }
    }
`;

export default StyledNavbar
