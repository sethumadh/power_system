import { PURGE } from "redux-persist"
import { boolean, z } from "zod"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { TestOptions } from "../../helper/testEnvOptions"
import {
  PSSE_File_Info_Schema,
  PSSE_File_Info_Schema_,
} from "@/helper/zodSchema"
import { stat } from "fs"

type PSSE_File_Info = z.infer<typeof PSSE_File_Info_Schema_>

type initialStateProps = {
  testOption: string
  PSSE_File_Info: PSSE_File_Info
  PSSE_File_Info_Is_Valid: boolean
  PSSE_File_Info_Is_Submitted: boolean
}
export const initialState: initialStateProps = {
  testOption: TestOptions.Tuning_Input,
  PSSE_File_Info: {
    PSSE_File: [
      {
        file_key: "",
        path_to_save_file: "",
        sav_file_name: "",
        path_to_dyre_file: "",
        dyre_file_name: "",
        path_to_dll_folder: "",
        case_selection: 0,
      },
    ],
    case_name: "case number",
  },
  PSSE_File_Info_Is_Valid: false,
  PSSE_File_Info_Is_Submitted: false,
}

const testSlice = createSlice({
  name: "testOption",
  initialState,
  reducers: {
    setTestOptions: (state, action: PayloadAction<string>) => {
      state.testOption = action.payload
    },
    setPSSE_File_Info: (state, action: PayloadAction<PSSE_File_Info>) => {
      // console.log(action.payload, "redux")
      if (state.PSSE_File_Info) {
        state.PSSE_File_Info = action.payload
      }
    },
    setPSSE_File_Info_IsValid: (state, action: PayloadAction<boolean>) => {
      // console.log(action.payload, "redux")

      state.PSSE_File_Info_Is_Valid = action.payload
    },
    setPSSE_File_Info_IsSubmitted: (state, action: PayloadAction<boolean>) => {
      state.PSSE_File_Info_Is_Submitted = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  },
})

// Action creators are generated for each case reducer function
// eslint-disable-next-line react-refresh/only-export-components
export const {
  setTestOptions,
  setPSSE_File_Info,
  setPSSE_File_Info_IsValid,
  setPSSE_File_Info_IsSubmitted,
} = testSlice.actions

export default testSlice
