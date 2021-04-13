import React,{useState} from 'react'
import Header from './Header/Header'
import Body from './Body'
import Sidebar from './SideBar/index'
import HeroSection from '../HeroSection'


const Layout = (props) =>{
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    
    return (<>
            <Header toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection/>
            
            {props.children}
            {/* Whatever components that is put inside the brackets <Component>Example</Component> will inherit all of the components above...Header,Sidebar,HeroSection, ect */}
            </>
    )
}

export default Layout
