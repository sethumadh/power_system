import React, { useState } from "react"
import { FcApproval } from "react-icons/fc"

import { TuningInputOptions } from "@/helper/testEnvOptions"
import { PSSE_File_Info } from "@/components/MainTestOptions/TuningInput"
import { persistor, useAppSelector, useAppDispatch } from "@/redux/store"

const TuningInput = () => {
  const [openTab, setOpenTab] = React.useState(
    TuningInputOptions.PSSE_File_Info
  )
  const [subTab, setSubTab] = useState()
  const PSSE_File_Info_Isvalid = useAppSelector(
    (state) => state.testOption.PSSE_File_Info_Is_Valid
  )
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className={`-mb-px mx-2 last:mr-0 flex  items-center space-x-2 text-xs font-bold px-5 py-3  lowercase shadow-lg rounded leading-normal cursor-pointer ${
                openTab === TuningInputOptions.PSSE_File_Info
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(TuningInputOptions.PSSE_File_Info)
              }}
            >
              <h1>psse_file_info</h1>
              <div className="w-1">
                {PSSE_File_Info_Isvalid && <FcApproval />}
              </div>
            </li>
            <li
              className={`-mb-px mr-2 last:mr-0  text-xs font-bold  px-5 py-3  lowercase shadow-lg rounded leading-normal cursor-pointer ${
                openTab === TuningInputOptions.New_Generator_Info
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(TuningInputOptions.New_Generator_Info)
              }}
            >
              new_generator_info
            </li>
            <li
              className={`-mb-px mr-2 last:mr-0  text-xs font-bold  px-5 py-3  lowercase shadow-lg rounded leading-normal cursor-pointer ${
                openTab === TuningInputOptions.Redispatch_Settings
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(TuningInputOptions.Redispatch_Settings)
              }}
            >
              redispatch_settngs
            </li>
            <li
              className={`-mb-px mr-2 last:mr-0  text-xs font-bold  px-5 py-3  lowercase shadow-lg rounded leading-normal cursor-pointer ${
                openTab === TuningInputOptions.Plot_Settings
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(TuningInputOptions.Plot_Settings)
              }}
            >
              plot_settings
            </li>
            <li
              className={`-mb-px mr-2 last:mr-0  text-xs font-bold  px-5 py-3  lowercase shadow-lg rounded leading-normal cursor-pointer ${
                openTab === TuningInputOptions.Plot_Info
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(TuningInputOptions.Plot_Info)
              }}
            >
              plot_info
            </li>
            <li
              className={`-mb-px mr-2 last:mr-0  text-xs font-bold  px-5 py-3  lowercase shadow-lg rounded leading-normal cursor-pointer ${
                openTab === TuningInputOptions.General_Settings
                  ? "text-white bg-red-600"
                  : "text-" + "red" + "-600 bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(TuningInputOptions.General_Settings)
              }}
            >
              general_settngs
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mx-2 ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === TuningInputOptions.PSSE_File_Info
                      ? "block"
                      : "hidden"
                  }
                  id="link1"
                >
                  <PSSE_File_Info />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TuningInput
