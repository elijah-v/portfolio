import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'gatsby'

const Sidebar = ({open, MobileMenu}) => {
    return (
        <SidebarContainer open={open} onClick={MobileMenu}>
        <Icon>
            <CloseIcon onClick={MobileMenu}/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to='/'onClick={MobileMenu}>
                Home
            </SidebarLink>
            <SidebarLink to='/about' onClick={MobileMenu}>
                About
            </SidebarLink>
            <SidebarLink to='/resume' onClick={MobileMenu}>
                Resume
            </SidebarLink>
            <SidebarLink to='/contact' onClick={MobileMenu}>
                Contact
            </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.aside`
position: fixed;
z-index: 9999;
width: 100%;
height: 100%;
background: #222;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({open})=>open ? '100%':'0'};
top: ${({open})=>open ? '0':'-100%'};

@media screen and (max-width: 500px) {
display: flex;
flex-direction: column;
}
`

const CloseIcon = styled(FaTimes)`
color: #fff;
`

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

const SidebarWrapper = styled.div`
color: #fff;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`

const SidebarMenu = styled.ul`
display: flex;
flex-direction: column;
text-align: center;
height: 70%;
`

const SidebarLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
list-style: none;
transition: 0.2 s ease-in-out;
font-size: 1.5rem;
text-decoration: none;
color: #fff;
cursor: pointer;

padding: 2.5em;
&:hover {
color: #01bf71;
}
`
