import { PURGE } from "redux-persist"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"


import { TestOptions } from "../../helper/testEnvOptions"
import { PSSE_File_Info_Schema } from "@/helper/zodSchema"
import { Psse_File_Info } from "@/components/MainTestOptions/TuningInput/PSSE_File_Info"

// type PSSE_File_Info = z.infer<typeof PSSE_File_Info_Schema>

type initialStateProps = {
  testOption: string
  PSSE_File_Info: Psse_File_Info
  PSSE_File_Info_Is_Valid: boolean
  PSSE_File_Info_Is_Submitted: boolean
}
export const initialState: initialStateProps = {
  testOption: TestOptions.Tuning_Input,
  PSSE_File_Info: {
    file_key: "",
    path_to_save_file: "",
    sav_file_name: "",
    path_to_dyre_file: "",
    dyre_file_name: "",
    path_to_dll_folder: "",
    case_selection: 0,
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
    setPSSE_File_Info: (state, action: PayloadAction<Psse_File_Info>) => {
      console.log(action.payload, "redux")
      if (state.PSSE_File_Info) {
        state.PSSE_File_Info.file_key = action.payload.file_key
        state.PSSE_File_Info.path_to_save_file =
          action.payload.path_to_save_file
        state.PSSE_File_Info.sav_file_name = action.payload.sav_file_name
        state.PSSE_File_Info.path_to_dyre_file =
          action.payload.path_to_dyre_file
        state.PSSE_File_Info.dyre_file_name = action.payload.dyre_file_name
        state.PSSE_File_Info.path_to_dll_folder =
          action.payload.path_to_dll_folder
        state.PSSE_File_Info.case_selection =
          action.payload.case_selection ?? 0
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
