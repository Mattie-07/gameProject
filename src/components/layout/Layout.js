import React,{useState} from 'react'
import Header from './Header/Header'
import { homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data'
import Sidebar from './SideBar/index'
import HeroSection from '../HeroSection'
import InfoSection from '../InfoSection'
import Services from '../Services'
import Footer from '../Footer'


const Layout = (props) =>{
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    
    return (<>
            <Header toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services/>
            <Footer/>
        
            {props.children}
            {/* Whatever components that is put inside the brackets <Component>Example</Component> will inherit all of the components above...Header,Sidebar,HeroSection, ect */}
            </>
    )
}

export default Layout
