import React, { useState } from "react"
import { ClauseInputOptions } from "@/helper/testEnvOptions"

const ClauseInput = () => {
  const [openTab, setOpenTab] = React.useState(ClauseInputOptions.Control_Modes)
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
              className={`-mb-px mx-2 last:mr-0  text-xs font-bold px-5 py-3 shadow-lg rounded leading-normal cursor-pointer ${
                openTab === ClauseInputOptions.Control_Modes
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(ClauseInputOptions.Control_Modes)
              }}
            >
              control_modes
            </li>
            <li
              className={`-mb-px mr-2 last:mr-0  text-xs font-bold  px-5 py-3 shadow-lg rounded leading-normal cursor-pointer ${
                openTab === ClauseInputOptions.Upper_Model_Params
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(ClauseInputOptions.Upper_Model_Params)
              }}
            >
              upper_model_params
            </li>
            <li
              className={`-mb-px mr-2 last:mr-0  text-xs font-bold  px-5 py-3 shadow-lg rounded leading-normal cursor-pointer ${
                openTab === ClauseInputOptions.Flat_Run
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(ClauseInputOptions.Flat_Run)
              }}
            >
              flat_run
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mx-2">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === ClauseInputOptions.Control_Modes
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
                    openTab === "upperModelParams" ? "block" : "hidden"
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
                  className={openTab === "flatRun" ? "block" : "hidden"}
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

export default ClauseInput
