import React from 'react'
import { Outlet } from 'react-router-dom'
import ControlBar from 'components/controls/ControlBar'
import AppSideBar from './AppSideBar'

const AppLayout = () => {
  return (
    <div className="drawer bg-gradient-to-b from-slate-50 to-gray-200 lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center bg-sidebar px-4">
        {/* Page content here */}

        <div className="mt-4 h-full w-[100%] rounded-xl bg-content shadow-lg">
          <Outlet />
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <ControlBar />
      <AppSideBar />
    </div>
  )
}

export default AppLayout
