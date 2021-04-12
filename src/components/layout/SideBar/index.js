import React from 'react'
import {SidebarContainer,
        Icon, 
        CloseIcon, 
        SidebarWrapper,
        SidebarMenu, 
        SidebarLink, 
        SideBtnWrap, 
        SidebarRoute } from './SidebarStyle'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="discover">Discover</SidebarLink>
                    <SidebarLink to="services">Services</SidebarLink>
                    <SidebarLink to="signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar