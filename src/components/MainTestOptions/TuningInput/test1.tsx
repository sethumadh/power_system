import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useEffect, useState } from "react"
  
  import {
    FormProvider,
    useForm,
    SubmitHandler,
    Controller,
    useFieldArray,
  } from "react-hook-form"
  
  import { zodResolver } from "@hookform/resolvers/zod"
  import { z } from "zod"
  import { PSSE_File_Info_Schema } from "@/helper/zodSchema"
  import { Button } from "@/components/ui/button"
  import { persistor, useAppSelector, useAppDispatch } from "@/redux/store"
  import {
    initialState,
    setPSSE_File_Info,
    setPSSE_File_Info_IsSubmitted,
    setPSSE_File_Info_IsValid,
  } from "@/redux/features/testSlice"
  
  export type PSSE_File_Info = z.infer<typeof PSSE_File_Info_Schema>
  
  export default function PSSE_File_Info() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const dispatch = useAppDispatch()
    const PSSE_File_Info = useAppSelector(
      (state) => state.testOption.PSSE_File_Info
    )
    const PSSE_File_Info_Is_Submitted = useAppSelector(
      (state) => state.testOption.PSSE_File_Info_Is_Submitted
    )
  
    const methods = useForm<PSSE_File_Info>({
      mode: "onChange",
      resolver: zodResolver(PSSE_File_Info_Schema),
      defaultValues: {
        PSSE_File: [
          {
            file_key: "",
            path_to_save_file: "",
            sav_file_name: "",
            path_to_dyre_file: "",
            dyre_file_name: "",
            path_to_dll_folder: "",
            // case_selection: 0,
          },
        ],
      },
      shouldFocusError: true,
    })
  
    const { control } = methods
  
    const { fields, append, update } = useFieldArray({
      name: "PSSE_File",
      control,
    })
  
    const onSubmit = (data: any) => {
      dispatch(setPSSE_File_Info(data))
  
      // --> send to backend and send to redux
    }
  
    const handleEdit = (bool: boolean) => {
      dispatch(setPSSE_File_Info_IsSubmitted(bool))
      setIsSubmitted(false)
    }
    const handleSubmit = (bool: boolean) => {
      dispatch(setPSSE_File_Info_IsSubmitted(bool))
      setIsSubmitted(bool)
    }
  
    useEffect(() => {
      console.log("useeffect")
    }, [dispatch])
    // // console.log(PSSE_File_Info, "from redux helloooo")
  
    console.log(methods.formState.errors, "<<-- error")
  
    return (
      <div className="flex flex-col ">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <Table className="">
              <TableCaption className="py-8">PSSE File information.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[10px]">file_key</TableHead>
                  <TableHead className="w-[10px]">path_to_save_file</TableHead>
                  <TableHead className="w-[10px]">sav_file_name</TableHead>
                  <TableHead className="w-[10px]">path_to_dyre_file</TableHead>
                  <TableHead className="w-[10px]">dyre_file_name</TableHead>
                  <TableHead className="w-[10px]">path_to_dll_folder</TableHead>
                  <TableHead className="w-[10px]">case_selection</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fields.map((field, index) => (
                  <TableRow key={field.id}>
                    <TableCell className="font-medium py-">
                      <input
                        {...methods.register(
                          `PSSE_File.${index}.file_key` as const
                        )}
                        className=" border rounded outline-none h-10"
                        disabled={
                          PSSE_File_Info_Is_Submitted ||
                          methods.formState.isSubmitting
                        }
                      />
                      <div className="h-4">
                        {methods.formState.errors &&
                          methods.formState.errors[
                            `PSSE_File.${index}.file_key`
                          ] && (
                            <span className="text-xs text-red-600">
                              {
                                methods.formState.errors[
                                  `PSSE_File.${index}.file_key`
                                ]?.message
                              }
                            </span>
                          )}
                      </div>
                    </TableCell>
  
                    <TableCell className="">
                      <input
                        {...methods.register(
                          `PSSE_File.${index}.path_to_save_file` as const
                        )}
                        className=" border rounded outline-none h-10"
                        disabled={
                          PSSE_File_Info_Is_Submitted ||
                          methods.formState.isSubmitting
                        }
                      />
                      {/* <div className="h-4">
                        {methods.formState.errors?.[
                          `PSSE_File.${index}.path_to_save_file`
                        ].message && (
                          <span className="text-xs text-red-600">
                            {
                              methods.formState.errors?.[
                                `PSSE_File.${index}.path_to_save_file`
                              ]?.message
                            }
                          </span>
                        )}
                      </div> */}
                      {/* <p>
                    {JSON.stringify(
                      methods.formState.errors.spring_high?.path_to_save_file
                      ?.message,
                      null,
                      2
                      )}
                    </p> */}
                    </TableCell>
                    <TableCell>
                      <input
                        {...methods.register(
                          `PSSE_File.${index}.sav_file_name` as const
                        )}
                        className=" border rounded outline-none h-10"
                        disabled={
                          PSSE_File_Info_Is_Submitted ||
                          methods.formState.isSubmitting
                        }
                      />
                      {/* <div className="h-4">
                        {methods.formState.errors?.[
                          `PSSE_File${index}.sav_file_name`
                        ]?.message && (
                          <span className="text-xs text-red-600">
                            {
                              methods.formState.errors?.[
                                `PSSE_File.${index}.sav_file_name`
                              ]?.message
                            }
                          </span>
                        )}
                      </div> */}
                    </TableCell>
                    <TableCell>
                      <input
                        {...methods.register(
                          `PSSE_File.${index}.path_to_dyre_file` as const
                        )}
                        className=" border rounded outline-none h-10"
                        disabled={
                          PSSE_File_Info_Is_Submitted ||
                          methods.formState.isSubmitting
                        }
                      />
                      {/* <div className="h-4">
                        {methods.formState.errors?.[
                          `PSSE_File.${index}.path_to_dyre_file`
                        ]?.message && (
                          <span className="text-xs text-red-600">
                            {
                              methods.formState.errors?.[
                                `PSSE_File.${index}.path_to_dyre_file`
                              ]?.message
                            }
                          </span>
                        )}
                      </div> */}
                    </TableCell>
                    <TableCell>
                      <input
                        {...methods.register(
                          `PSSE_File.${index}.dyre_file_name` as const
                        )}
                        className=" border rounded outline-none h-10"
                        disabled={
                          PSSE_File_Info_Is_Submitted ||
                          methods.formState.isSubmitting
                        }
                      />
                      {/* <div className="h-4">
                        {methods.formState.errors?.[
                          `PSSE_File.${index}.dyre_file_name`
                        ]?.message && (
                          <span className="text-xs text-red-600">
                            {
                              methods.formState.errors?.[
                                `PSSE_File.${index}.dyre_file_name`
                              ]?.message
                            }
                          </span>
                        )}
                      </div> */}
                    </TableCell>
                    <TableCell>
                      <input
                        {...methods.register(
                          `PSSE_File.${index}.path_to_dll_folder` as const
                        )}
                        className=" border rounded outline-none h-10 "
                        disabled={
                          PSSE_File_Info_Is_Submitted ||
                          methods.formState.isSubmitting
                        }
                      />
                      {/* <div className="h-4">
                        {methods.formState.errors?.[
                          `PSSE_File.${index}.path_to_dll_folder`
                        ]?.message && (
                          <span className="text-xs text-red-600">
                            {
                              methods.formState.errors?.[
                                `PSSE_File.${index}.path_to_dll_folder`
                              ]?.message
                            }
                          </span>
                        )}
                      </div> */}
                    </TableCell>
                    <TableCell>
                      {/* <div className="text-center">
                        <Controller
                          name={`PSSE_File.${index}.case_selection` as const}
                          control={methods.control}
                          render={({ field }) => (
                            <input
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              type="checkbox"
                              {...field}
                              // onChange={(e) => field.onChange(e.target.checked)}
                              checked={field.value === 1}
                              />
                          )}
                        />
                      </div> */}
                      <div className="h-4"></div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex space-x-8 mt-20">
              {/* <Button variant="outline" type="submit">
                submit
              </Button> */}
              <Button
                variant="outline"
                type="button"
                onClick={async () => {
                  const validateStep = await methods.trigger()
                  dispatch(setPSSE_File_Info_IsValid(validateStep))
                  dispatch(setPSSE_File_Info(methods.getValues()))
                }}
                disabled={PSSE_File_Info_Is_Submitted || isSubmitted}
              >
                Save
              </Button>
              <Button
                variant="outline"
                type="submit"
                onClick={async () => {
                  const validateStep = await methods.trigger()
                  // handleSubmit()
                  dispatch(setPSSE_File_Info_IsValid(validateStep))
                  dispatch(setPSSE_File_Info(methods.getValues()))
                  handleSubmit(true)
                }}
                disabled={
                  !methods.formState.isValid ||
                  PSSE_File_Info_Is_Submitted ||
                  isSubmitted
                }
              >
                Submit
              </Button>
              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  handleEdit(false)
                }}
              >
                Edit
              </Button>
              <Button
                disabled={PSSE_File_Info_Is_Submitted || isSubmitted}
                variant="outline"
                type="button"
                onClick={() => {
                  methods.reset()
                  console.log(methods.getValues())
                  dispatch(setPSSE_File_Info_IsValid(false))
                  dispatch(setPSSE_File_Info(initialState.PSSE_File_Info))
                  // methods.setValue(initialState.PSSE_File_Info)
                }}
              >
                Reset
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    )
  }
  