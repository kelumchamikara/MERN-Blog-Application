import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Fotter from './Fotter'

const Layout = () => {
  return (
    <>
      <Header/>
          <Outlet/>
       
      <Fotter/>
    </>
  )
}

export default Layout
