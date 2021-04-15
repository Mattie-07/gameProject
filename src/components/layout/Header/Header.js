import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {NavigationBar, NavLogo, NavigationContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavButton, NavButtonLink} 
from './HeaderStyle'
import {IconContext} from 'react-icons/lib'


const Header = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }   else{
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)

    },[])

    return(

    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <NavigationBar scrollNav={scrollNav}>
            <NavigationContainer>
                <NavLogo to='/'>Matthew</NavLogo>
                <MobileIcon onClick={toggle}>
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
    </IconContext.Provider>
    </>
    )
}

export default Header;