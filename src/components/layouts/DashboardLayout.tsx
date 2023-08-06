import { useState } from "react"
import { Outlet } from "react-router-dom"

import SideNavBar from "../../components/Sidenavbar"
import Header from "../Header"
import MobileViewSidenavbar from "../../components/MobileViewSidenavbar"
import Footer from "../../components/Footer"
import AccountSidebar from "../../components/AccountSidebar"
import TestingSidebar from "../TestingSidebar"

const DashboardLayout = () => {
  const [openRight, setOpenRight] = useState(false)
  const openDrawerRight = () => setOpenRight(true)
  const closeDrawerRight = () => setOpenRight(false)

  return (
    <div
      id="dashboard"
      className=" w-full min-h-screen  bg-slate-50"
    >
      <Header openDrawerRight={openDrawerRight} />
      <Outlet />
      {/* <MobileViewSidenavbar
        openRight={openRight}
        openDrawerRight={openDrawerRight}
        closeDrawerRight={closeDrawerRight}
      /> */}
      <div className="border shadow-sm">
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout
