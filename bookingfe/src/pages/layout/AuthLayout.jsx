import React, { useEffect } from 'react'
import SideBar from '../SideBar'
import NavBar from '../NavBar';

import {
    Sidenav,
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";

const AuthLayout = ({children}) => {


    useEffect( ()=> {
        initTE({Sidenav, Dropdown, Ripple});
    }, []);



  return (
    <>
        <header>
            <SideBar />
            <NavBar />
        
        </header>
        <div>
            {children}
        </div>
    </>
  )
}

export default AuthLayout
