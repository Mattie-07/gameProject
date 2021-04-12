import React from 'react'
import Header from './Header'
import Body from './Body'
import '../../assets/styles.css'
import Sidebar from './SideBar/index'


function Layout(props) {
    return (<>
            <Header />
            <Sidebar/>
            <Body />
            
            {props.children}
            </>
    )
}

export default Layout
