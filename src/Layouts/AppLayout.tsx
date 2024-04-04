import React from 'react'
import AppSideBar from './AppSideBar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="drawer bg-gradient-to-b from-slate-50 to-gray-200 lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <AppSideBar />
    </div>
  )
}

export default AppLayout
