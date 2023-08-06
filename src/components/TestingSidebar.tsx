import React, { useEffect } from "react"
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import { Link } from "react-router-dom"
import { icons, images } from "../constant"
import { persistor, useAppSelector, useAppDispatch } from "@/redux/store"
import { setTestOptions } from "@/redux/features/testSlice"
import { TestOptions } from "@/helper/testEnvOptions"

const TestingSidebar = () => {
  const dispatch = useAppDispatch()
  const testOption = useAppSelector((state) => state.testOption.testOption)

  return (
    <div
      style={{ height: "auto", display: "flex" }}
      className="mt-3"
    >
      <Sidebar
        style={{
          height: "auto",
          backgroundColor: "",
          zIndex: 999,
        }}
      >
        <Menu className="">
          <MenuItem className="text-xl bg-slate-300">
            <h1 className="font-semibold">Test Options</h1>
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(setTestOptions(TestOptions.Clause_Input))
            }}
            className={`${
              testOption == TestOptions.Clause_Input
                ? "bg-gradient-to-r from-orange-400  to-yellow-300"
                : ""
            }`}
            // icon={<icons.DashboardIcon style={{ color: "black" }} />}
            component={<Link to={`/`} />}
          >
            Clause Input
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(setTestOptions(TestOptions.Main_Input))
            }}
            className={`${
              testOption == TestOptions.Main_Input
                ? "bg-gradient-to-r from-orange-400  to-yellow-300"
                : ""
            }`}
          >
            Main Input
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(setTestOptions(TestOptions.Profiles))
            }}
            className={` ${
              testOption == TestOptions.Profiles
                ? "bg-gradient-to-r from-orange-400  to-yellow-300"
                : ""
            }`}
          >
            {" "}
            Profiles
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(setTestOptions(TestOptions.Tuning_Input))
            }}
            className={`${
              testOption == TestOptions.Tuning_Input
                ? "bg-gradient-to-r from-orange-400  to-yellow-300"
                : ""
            }`}
          >
            {" "}
            Tuning Input
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default TestingSidebar
