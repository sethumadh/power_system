import React from "react"
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import { Link } from "react-router-dom"
import { images } from "../constant"

const AccountSidebar = () => {
  return (
    <div style={{ height: "auto", display: "flex" }} className="">
      <Sidebar
        style={{
          height: "auto",
          backgroundColor: "",
          paddingTop: "",
          width:"20px",
          zIndex: 999,
        }}
        className="bg-white hidden lg:block"
      >
        <Menu className="pt-4">
          <MenuItem> Dashboard</MenuItem>
          <MenuItem>Account Settings</MenuItem>
          <MenuItem> Test History</MenuItem>
          <MenuItem> Contact</MenuItem>
          <MenuItem> Log Out</MenuItem>
        </Menu>
      </Sidebar>
      
    </div>
  )
}

export default AccountSidebar
