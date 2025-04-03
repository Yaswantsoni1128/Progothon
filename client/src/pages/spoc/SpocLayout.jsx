import React from "react";
import SpocNavbar from "./SpocNavbar"; 
import { Navigate, Outlet } from "react-router-dom";

const SpocLayout = () => {

  const role  = localStorage.getItem("role")

  // if (role !== "spoc") {
  //   return <Navigate to="/powerplant/dashboard" replace />;
  // }

  return (
    <div>
      <SpocNavbar />
      <div>
        <Outlet /> 
      </div>

    </div>
  );
};

export default SpocLayout;
