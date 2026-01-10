import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    const logedin=localStorage.getItem("kyc_data_update")
  return (
    logedin?<Outlet/>:<Navigate to={"/"}/>
  )
}

export default Auth