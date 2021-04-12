import React from "react";
import {Link} from 'react-router-dom'
import '../../assets/styles.css'
import {FaBars} from 'react-icons/fa'
import {NavigationBar, NavLogo, NavigationContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavButton, NavButtonLink} 
from './HeaderStyle'



const Header = () => {
    return(
    <>
        <NavigationBar>
            <NavigationContainer>
                <NavLogo to='/'>Matthew</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                    <NavButton>
                        <NavButtonLink to="/signin">Sign In</NavButtonLink>
                    </NavButton>
                </NavMenu>
            </NavigationContainer>
        </NavigationBar>
    </>
    )
}

export default Header;