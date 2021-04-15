import React,{useState, useEffect} from "react";
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
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

    const toggleHome = () => {
        scroll.scrollToTop();
    }



    return(
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <NavigationBar scrollNav={scrollNav}>
            <NavigationContainer>
                <NavLogo to='/' onClick={toggleHome}>Matthew</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset={-80}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset={-80}>Sign Up</NavLinks>
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