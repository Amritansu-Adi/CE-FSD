import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <div>MainLayout</div>
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/registration">Registration</a></li>
        </ul>
        <Outlet />
    </>
  )
}

export default MainLayout