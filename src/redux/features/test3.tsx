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

export const PSSE_File_Info_Schema = z.object({
  PSSE_File: z.array(
    z.object({
      file_key: z.string().min(1, { message: "Input required" }).optional(),
      path_to_save_file: z
        .string()
        .min(1, { message: "Input required" })
        .optional(),
      sav_file_name: z
        .string()
        .min(1, { message: "Input required" })
        .optional(),
      path_to_dyre_file: z
        .string()
        .min(1, { message: "Input required" })
        .optional(),
      dyre_file_name: z
        .string()
        .min(1, { message: "Input required" })
        .optional(),
      path_to_dll_folder: z
        .string()
        .min(1, { message: "Input required" })
        .optional(),
      // case_selection: z.number(),
    })
  ),
})
