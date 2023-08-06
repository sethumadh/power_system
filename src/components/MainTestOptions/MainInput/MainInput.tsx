import React, { useState } from "react"
import { MainInputOptions } from "@/helper/testEnvOptions"

const MainInput = () => {
  const [openTab, setOpenTab] = useState(MainInputOptions.Clause_Selection)
  const [subTab, setSubTab] = useState()
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className={`-mb-px mx-2 last:mr-0  text-xs font-bold  lowercase px-5 py-3 shadow-lg rounded leading-normal cursor-pointer ${
                openTab === MainInputOptions.Clause_Selection
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(MainInputOptions.Clause_Selection)
              }}
            >
              clause_selection
            </li>
            <li
              className={`-mb-px mr-2 last:mr-0  text-xs font-bold lowercase px-5 py-3 shadow-lg rounded leading-normal cursor-pointer ${
                openTab === MainInputOptions.Plant_Info
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(MainInputOptions.Plant_Info)
              }}
            >
              plant_info
            </li>
            <li
              className={`-mb-px mr-2 last:mr-0  text-xs font-bold  lowercase px-5 py-3 shadow-lg rounded leading-normal cursor-pointer ${
                openTab === MainInputOptions.Dispatch_Info
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(MainInputOptions.Dispatch_Info)
              }}
            >
              dispatch_info
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mx-2">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === MainInputOptions.Clause_Selection
                      ? "block"
                      : "hidden"
                  }
                  id="link1"
                >
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div
                  className={
                    openTab === MainInputOptions.Plant_Info ? "block" : "hidden"
                  }
                  id="link2"
                >
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div
                  className={
                    openTab === MainInputOptions.Dispatch_Info
                      ? "block"
                      : "hidden"
                  }
                  id="link3"
                >
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainInput
