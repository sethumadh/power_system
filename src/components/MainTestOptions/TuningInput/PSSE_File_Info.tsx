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
  Controller,
  useFieldArray,
  Control,
  useWatch,
} from "react-hook-form"

import Modal from "@/components/Modal"
import { useModal } from "@/hooks/useModal"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  PSSE_File_Info_Schema,
  PSSE_File_Info_Schema_,
} from "@/helper/zodSchema"
import { Button } from "@/components/ui/button"
import { persistor, useAppSelector, useAppDispatch } from "@/redux/store"
import {
  setPSSE_File_Info,
  setPSSE_File_Info_IsSubmitted,
  setPSSE_File_Info_IsValid,
} from "@/redux/features/testSlice"
import { icons } from "@/constant"
import { HoverCardInfo } from "@/components/HoverCard"
import { toast } from "react-hot-toast"

export type Psse_File_Info = z.infer<typeof PSSE_File_Info_Schema>
type PSSE_File_Info = z.infer<typeof PSSE_File_Info_Schema_>

export default function PSSE_File_Info() {
  const modal = useModal()
  const [isReset, setIsReset] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const dispatch = useAppDispatch()
  const PSSE_File_Info_Is_Submitted = useAppSelector(
    (state) => state.testOption.PSSE_File_Info_Is_Submitted
  )
  const PSSE_File_Info = useAppSelector(
    (state) => state.testOption.PSSE_File_Info
  )
  const methods = useForm<PSSE_File_Info>({
    mode: "onChange",
    resolver: zodResolver(PSSE_File_Info_Schema_),
    defaultValues: isReset
      ? {
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
        }
      : {
          case_name: PSSE_File_Info.case_name
            ? PSSE_File_Info.case_name
            : "case number",
          PSSE_File: PSSE_File_Info.PSSE_File.map((p) => {
            return {
              case_selection: p.case_selection,
              dyre_file_name: p.dyre_file_name,
              file_key: p.file_key,
              path_to_dll_folder: p.path_to_dll_folder,
              path_to_dyre_file: p.path_to_dyre_file,
              path_to_save_file: p.path_to_save_file,
              sav_file_name: p.sav_file_name,
            }
          }),
        },
    shouldFocusError: true,
  })

  const { control } = methods
  const { fields, append, remove } = useFieldArray({
    name: "PSSE_File",
    control,
  })
  console.log(methods.formState.errors, "<<--")

  const onSubmit = async (data: PSSE_File_Info) => {
    const validateStep = await methods.trigger()
    if (!validateStep) {
      toast.error(
        "You data is not submitted. Please ensure you enter all fileds with valid data"
      )
    }
    if (validateStep) {
      toast.success("You data is submitted. ")
    }
    handleSubmit(true)
    setIsReset(false)
    dispatch(setPSSE_File_Info_IsValid(validateStep))
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

  //   }, [watchForm, methods, dispatch])
  // console.log(methods.formState.errors.root, "<<<<--- error")
  console.log(PSSE_File_Info, "redux updated")
  // console.log(isReset)
  return (
    <div className="flex flex-col">
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Table className="">
          <TableCaption className="py-8">PSSE File information.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10px] text-muted-foreground ">
                <div className="flex items-center">
                  <h1>file_key</h1>
                  <div>
                    <HoverCardInfo
                      title="file_key"
                      message={`file_key has to be unique in each row`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead className="w-[10px] text-muted-foreground ">
                <div className="flex items-center">
                  <h1>path_to_save_file</h1>
                  <div className="w-">
                    <HoverCardInfo
                      title="file_key"
                      message={`file_key has to be unique in each row`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead className="w-[10px] text-muted-foreground ">
                <div className="flex items-center">
                  <h1>sav_file_name</h1>
                  <div>
                    <HoverCardInfo
                      title="file_key"
                      message={`file_key has to be unique in each row`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead className="w-[10px] text-muted-foreground ">
                <div className="flex items-center">
                  <h1>path_to_dyre_file</h1>
                  <div>
                    <HoverCardInfo
                      title="file_key"
                      message={`file_key has to be unique in each row`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead className="w-[10px] text-muted-foreground ">
                <div className="flex items-center">
                  <h1>dyre_file_name</h1>
                  <div>
                    <HoverCardInfo
                      title="file_key"
                      message={`file_key has to be unique in each row`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead className="w-[10px] text-muted-foreground ">
                <div className="flex items-center">
                  <h1>path_to_dll_folder</h1>
                  <div>
                    <HoverCardInfo
                      title="file_key"
                      message={`file_key has to be unique in each row`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead className="w-[10px] text-muted-foreground ">
                <div className="flex items-center">
                  <h1>case_selection</h1>
                  <div>
                    <HoverCardInfo
                      title="file_key"
                      message={`file_key has to be unique in each row`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead className="w-[10px] text-muted-foreground ">
                <div className="flex items-center">
                  <h1>action</h1>
                  <div>
                    <HoverCardInfo
                      title="file_key"
                      message={`file_key has to be unique in each row`}
                    />
                  </div>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell className="font-medium py-">
                  <input
                    {...methods.register(`PSSE_File.${index}.file_key`, {
                      validate: (values) => {
                        return values !== "aa" || "give aa only"
                      },
                    })}
                    className=" border rounded outline-none h-10"
                    disabled={
                      PSSE_File_Info_Is_Submitted ||
                      methods.formState.isSubmitting
                    }
                  />
                  <div className="h-12">
                    {methods.formState.errors?.PSSE_File &&
                      methods.formState.errors?.PSSE_File[index]?.file_key
                        ?.message && (
                        <span className="text-xs text-red-600">
                          {
                            methods.formState.errors?.PSSE_File[index]?.file_key
                              ?.message
                          }
                        </span>
                      )}
                    {methods.formState.errors?.PSSE_File && (
                      <span className="text-xs text-red-600">
                        {methods.formState.errors?.PSSE_File?.message}
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
                  <div className="h-12">
                    {methods.formState.errors?.PSSE_File &&
                      methods.formState.errors?.PSSE_File[index]
                        ?.path_to_save_file?.message && (
                        <span className="text-xs text-red-600">
                          {
                            methods.formState.errors?.PSSE_File[index]
                              ?.path_to_save_file?.message
                          }
                        </span>
                      )}
                  </div>
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
                  <div className="h-12">
                    {methods.formState.errors?.PSSE_File &&
                      methods.formState.errors?.PSSE_File[index]?.sav_file_name
                        ?.message && (
                        <span className="text-xs text-red-600">
                          {
                            methods.formState.errors?.PSSE_File[index]
                              ?.sav_file_name?.message
                          }
                        </span>
                      )}
                  </div>
                </TableCell>
                <TableCell>
                  <Controller
                    control={control}
                    name={`PSSE_File.${index}.path_to_dyre_file` as const}
                    render={({ field: { value, onChange, ...field } }) => {
                      return (
                        <>
                          <input
                            type="file"
                            {...field}
                            onChange={(event) => {
                              onChange(
                                event.target.files && event.target.files[0].name
                              )
                            }}
                            // className=" border rounded outline-none "
                            className="opacity-0 absolute"
                            disabled={
                              PSSE_File_Info_Is_Submitted ||
                              methods.formState.isSubmitting
                            }
                          />
                          {/* <p>{JSON.stringify(value, null, 2)}</p> */}
                          <div className="w-32  truncate">
                            {value ? (
                              <div className=" border rounded outline-none px-2 py-2">
                                {value}
                              </div>
                            ) : (
                              <div className="flex items-center justify-center space-x-2 w-full cursor-pointer border rounded outline-none h-10">
                                <div className="">
                                  <icons.AiOutlineCloudUpload />
                                </div>
                                <h2>Upload</h2>
                              </div>
                            )}
                          </div>
                        </>
                      )
                    }}
                  />
                  <div className="h-12">
                    {methods.formState.errors?.PSSE_File &&
                      methods.formState.errors?.PSSE_File[index]
                        ?.path_to_dyre_file?.message && (
                        <span className="text-xs text-red-600">
                          {
                            methods.formState.errors?.PSSE_File[index]
                              ?.path_to_dyre_file?.message
                          }
                        </span>
                      )}
                  </div>
                </TableCell>
                <TableCell>
                  <Controller
                    control={control}
                    name={`PSSE_File.${index}.dyre_file_name` as const}
                    render={({ field: { value, onChange, ...field } }) => {
                      return (
                        <>
                          <input
                            type="file"
                            {...field}
                            onChange={(event) => {
                              onChange(
                                event.target.files && event.target.files[0].name
                              )
                            }}
                            // className=" border rounded outline-none "
                            className="opacity-0 absolute"
                            disabled={
                              PSSE_File_Info_Is_Submitted ||
                              methods.formState.isSubmitting
                            }
                          />
                          {/* <p>{JSON.stringify(value, null, 2)}</p> */}
                          <div className="w-32  truncate">
                            {value ? (
                              <div className=" border rounded outline-none px-2 py-2">
                                {value}
                              </div>
                            ) : (
                              <div className="flex items-center justify-center space-x-2 w-full cursor-pointer border rounded outline-none h-10">
                                <div className="">
                                  <icons.AiOutlineCloudUpload />
                                </div>
                                <h2>Upload</h2>
                              </div>
                            )}
                          </div>
                        </>
                      )
                    }}
                  />
                  <div className="h-12">
                    {methods.formState.errors?.PSSE_File &&
                      methods.formState.errors?.PSSE_File[index]?.dyre_file_name
                        ?.message && (
                        <span className="text-xs text-red-600">
                          {
                            methods.formState.errors?.PSSE_File[index]
                              ?.dyre_file_name?.message
                          }
                        </span>
                      )}
                  </div>
                </TableCell>
                <TableCell>
                  <Controller
                    control={control}
                    name={`PSSE_File.${index}.path_to_dll_folder` as const}
                    render={({ field: { value, onChange, ...field } }) => {
                      return (
                        <>
                          <input
                            type="file"
                            {...field}
                            // value={"hello"}
                            onChange={(event) => {
                              onChange(
                                event.target.files && event.target.files[0].name
                              )
                            }}
                            // className=" border rounded outline-none "
                            className="opacity-0 absolute"
                            disabled={
                              PSSE_File_Info_Is_Submitted ||
                              methods.formState.isSubmitting
                            }
                          />
                          {/* <p>{JSON.stringify(value, null, 2)}</p> */}
                          <div className="w-32  truncate">
                            {value ? (
                              <div className=" border rounded outline-none px-2 py-2">
                                {value}
                              </div>
                            ) : (
                              <div className="flex items-center justify-center space-x-2 w-full cursor-pointer border rounded outline-none h-10">
                                <div className="">
                                  <icons.AiOutlineCloudUpload />
                                </div>
                                <h2>Upload</h2>
                              </div>
                            )}
                          </div>
                        </>
                      )
                    }}
                  />

                  <div className="h-12">
                    {methods.formState.errors?.PSSE_File &&
                      methods.formState.errors?.PSSE_File[index]
                        ?.path_to_dll_folder?.message && (
                        <span className="text-xs text-red-600">
                          {
                            methods.formState.errors?.PSSE_File[index]
                              ?.path_to_dll_folder?.message
                          }
                        </span>
                      )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-center">
                    <Controller
                      name={`PSSE_File.${index}.case_selection`}
                      control={methods.control}
                      render={({ field }) => (
                        <input
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          type="checkbox"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.checked))
                          }
                          checked={field.value === 1}
                        />
                      )}
                    />
                  </div>
                  <div className="h-12"></div>
                </TableCell>
                {index == 0 && (
                  <TableCell className=" flex justify-center ">
                    <div className=" text-slate-400 text-center bg-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-2 py-2 mr-2 mt-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-not-allowed ">
                      <icons.RiDeleteBin5Line />
                    </div>
                    {/* <div className="h-4 w-4"></div> */}
                  </TableCell>
                )}
                {index > 0 && (
                  <TableCell className=" flex justify-center ">
                    {!PSSE_File_Info_Is_Submitted && (
                      <div
                        onClick={() => {
                          remove(index)
                        }}
                        className=" cursor-pointer text-red-500 text-center  disabled:bg-slate-300  bg-white hover:bg-slate-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-2 py-2 mr-2 mt-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        <icons.RiDeleteBin5Line />
                      </div>
                    )}
                    {PSSE_File_Info_Is_Submitted && (
                      <div className=" cursor-not-allowed text-slate-400 text-center  disabled:bg-slate-300  bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-2 py-2 mr-2 mt-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <icons.RiDeleteBin5Line />
                      </div>
                    )}
                    {/* <div className="h-4 w-4"></div> */}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex flex-col justify-center items-center">
          <button
            disabled={PSSE_File_Info_Is_Submitted}
            type="button"
            onClick={() => {
              append({
                case_selection: 0,
                dyre_file_name: "",
                file_key: "",
                path_to_dll_folder: "",
                path_to_dyre_file: "",
                path_to_save_file: "",
                sav_file_name: "",
              })
            }}
            className="disabled:cursor-not-allowed disabled:bg-slate-300 max-w-max text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add
          </button>
          <h1 className="text-muted-foreground ">
            Click <span className="font-semibold">Add</span> to add a new row
          </h1>
        </div>
        <div className="flex space-x-8 mt-20 ">
          <Button
            variant="outline"
            type="button"
            onClick={async () => {
              const validateStep = await methods.trigger()
              toast.success(
                "You data is saved. Please ensure you enter all fileds with valid data"
              )
              dispatch(setPSSE_File_Info_IsValid(validateStep))
              dispatch(
                setPSSE_File_Info({
                  case_name: methods.getValues().case_name,
                  PSSE_File: methods.getValues().PSSE_File.map((p) => {
                    return {
                      case_selection: p.case_selection,
                      dyre_file_name: p.dyre_file_name,
                      file_key: p.file_key,
                      path_to_dll_folder: p.path_to_dll_folder,
                      path_to_dyre_file: p.path_to_dyre_file,
                      path_to_save_file: p.path_to_save_file,
                      sav_file_name: p.sav_file_name,
                    }
                  }),
                })
              )

              setIsReset(false)
            }}
            disabled={PSSE_File_Info_Is_Submitted || isSubmitted}
          >
            Save
          </Button>
          <Button
            variant="outline"
            type="submit"
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

          <Modal
            modal={modal}
            showBackdrop={false}
            showBackgroundBlur={false}
            // maxWidth={"lg"}
            className="leading-7 w-[600px] h-[200px] left-[4%] top-[40%] rounded-xl  bg-slate-100 "
          >
            <Modal.Title
              className={` w-full 
             py-8 px-10 text-xl font-semibold leading-7  mb-4 text-muted-foreground `}
            >
              Do you really want to reset? All data and rows will be deleted
              Permanently.
            </Modal.Title>
            <Modal.Description className={`flex justify-center  mb-4`}>
              <Button
                className="px-4 mx-2 text-white bg-red-500"
                disabled={PSSE_File_Info_Is_Submitted || isSubmitted}
                variant="outline"
                type="button"
                onClick={() => {
                  // methods.reset()
                  modal.closeModal()
                  methods.setValue("PSSE_File", [
                    {
                      file_key: "",
                      path_to_save_file: "",
                      sav_file_name: "",
                      path_to_dyre_file: "",
                      dyre_file_name: "",
                      path_to_dll_folder: "",
                      case_selection: 0,
                    },
                  ])
                  methods.setValue("case_name", "Reset")
                  console.log(methods.getValues(), "--->>> reset values")
                  dispatch(
                    setPSSE_File_Info({
                      case_name: "",
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
                    })
                  )
                  dispatch(setPSSE_File_Info_IsValid(false))
                  setIsReset(true)

                  // methods.setValue(initialState.PSSE_File_Info)
                }}
              >
                Confirm Reset
              </Button>
              <Button onClick={modal.closeModal} className="px-4 mx-2">
                Cancel
              </Button>
            </Modal.Description>
          </Modal>

          <Button
            type="button"
            onClick={modal.openModal}
            className="bg-red-500 hover:bg-red-600"
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  )
}
