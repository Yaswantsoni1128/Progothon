import React from 'react'
import PowerPlantNavbar from './PowerPlantNavbar'
import { Navigate, Outlet } from 'react-router-dom'

const PowerPlantLayout = () => {

  // const role  = localStorage.getItem("role")

  // if (role !== "power_plant") {
  //   return <Navigate to="/spoc/dashboard" replace />;
  // }

  return (
    <div>
      <PowerPlantNavbar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default PowerPlantLayout