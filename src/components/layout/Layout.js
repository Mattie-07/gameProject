import React from 'react'
import Header from './Header'
import Body from './Body'
import '../../assets/styles.css'


function Layout(props) {
    return (<>
            <Header />
            <Body />
            {props.children}
            </>
    )
}

export default Layout
