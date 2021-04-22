import React,{useState} from 'react'
import Header from './Header/Header'
import Sidebar from './SideBar/index'
import Footer from '../Footer'


const Layout = (props) =>{
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    
    return (<>
            <Header toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            {props.children}
            <Footer/>
            {/* Whatever components that is put inside the brackets <Component>Example</Component> will inherit all of the components above...Header,Sidebar,HeroSection, ect */}
            </>
    )
}

export default Layout
