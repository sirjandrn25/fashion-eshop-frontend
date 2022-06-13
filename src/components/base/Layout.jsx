import React from 'react'
import Navbar from '../nav-header/Navbar'
import { Routes, Route } from 'react-router-dom'
import StatusNotification from '../UI/StatusNotification'

const Layout = (props) => {
  return (
    <div className='h-full w-screen relative flex flex-col justify-center bg-gray-200'>
      <Navbar />

      <div className='w-full absolute  top-[150px] right-0 left-0 flex items-center justify-center  '>
        {props.children}
      </div>
      <StatusNotification />
    </div>
  )
}

export default Layout
