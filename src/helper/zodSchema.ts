import { boolean, z } from "zod"

export const ChangePasswordSchema = z
  .object({
    password: z
      .string()
      .min(5, { message: "Password should be minimum 5 characters" })
      .max(20, { message: "Password should not be more than 20 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password should be minimum 6 characters" })
      .max(20, { message: "Password should not be more than 20 characters" }),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords do not match. Please try again",
    path: ["confirmPassword"],
  })
export const SignupSchema = z
  .object({
    name: z.string().min(3, { message: "name should be minimum 3 characters" }),
    email: z.string().email({ message: "Enter a valid email" }),
    password: z
      .string()
      .min(5, { message: "Password should be minimum 5 characters" })
      .max(20, { message: "Password should not be more than 20 characters" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Password should be minimum 5 characters" })
      .max(20, { message: "Password should not be more than 20 characters" }),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords do not match. Please try again",
    path: ["confirmPassword"],
  })

export const LoginFormDataSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(1, "Password is required"),
})

export const PSSE_File_Info_Schema = z
  .object({
    file_key: z.string().min(1, { message: "Input required" }),
    path_to_save_file: z.string().min(1, { message: "Input required" }),
    sav_file_name: z.string().min(1, { message: "Input required" }),
    path_to_dyre_file: z.string().min(1, { message: "Input required" }),
    dyre_file_name: z.string().min(1, { message: "Input required" }),
    path_to_dll_folder: z.string().min(1, { message: "Input required" }),
    case_selection: z.number(),
  })
  .partial()
export const PSSE_File_Info_Schema_ = z.object({
  case_name: z.string().optional(),
  PSSE_File: z
    .array(
      z.object({
        file_key: z.string().min(1, { message: "Input required" }),
        path_to_save_file: z.string().min(1, { message: "Input required" }),
        sav_file_name: z.string().min(1, { message: "Input required" }),
        path_to_dyre_file: z
          .string()
          .min(1, { message: "Input required" })
          .regex(/^.+\.dyre$/, {
            message: "File name must end with.dyre",
          }),
        dyre_file_name: z
          .string()
          .min(1, { message: "Input required" })
          .regex(/^.+\.dyre$/, {
            message: "File name must end with .dyre",
          }),
        path_to_dll_folder: z
          .string()
          .min(1, { message: "Input required" })
          .regex(/^.+\.dll$/, {
            message: "File name must end with .dll",
          }),
        case_selection: z.number(),
      })
    )
    .refine(
      (items) => {
        const fileKeyValues = items.map((item) => item.file_key)
        const hasDuplicates =
          new Set(fileKeyValues).size == fileKeyValues.length
        return hasDuplicates
      },
      {
        message: "enter unqiue file name",
      }
    ),
})
