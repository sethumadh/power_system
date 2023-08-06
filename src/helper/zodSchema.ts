import { boolean, z } from "zod"

// export const StudentListSchema = z.array(
//   z.object({
//     _id: z.string(),
//     name: z.string(),
//     email: z.string(),
//     isActive: z.boolean(),
//     createdAt: z.string(),
//   })
// )

// export const StudentDetailsSchema = z.object({
//   _id: z.string(),
//   name: z.string().optional(),
//   mobileNumber: z.number().optional(),
//   gender: z.string().optional(),
//   email: z.string().optional(),
//   createdAt: z.string().optional(),
//   isActive: boolean().optional(),
//   city: z.string().optional(),
//   pincode: z.number().optional(),
//   profileImage: z
//     .object({
//       mimeType: z.string().optional(),
//       name: z.string().optional(),
//       path: z.string().optional(),
//     })
//     .optional(),
//   qualification: z.string().optional(),
// })

// export const CourseDetailsSchema = z.array(
//   z.object({
//     course: z
//       .object({
//         name: z.string().optional(),
//         offerText: z.nullable(z.string()).optional(),
//       })
//       .optional(),
//     isCompleted: z.boolean().optional(),
//     purchasedOn: z.string().optional(),
//     completedChapters: z
//       .array(
//         z.object({
//           name: z.string().optional(),
//           timeRequired: z.number().optional(),
//           chapterId: z.string().optional(),
//           status: z.string().optional(),
//           startTime: z.string().nullish().optional(),
//           completedTime: z.string().nullish().optional(),
//           isCompleted: z.boolean().optional(),
//           isMandatory: z.boolean().optional(),
//           completedContent: z.array(
//             z.object({
//               name: z.string().optional(),
//               timeRequired: z.number().optional(),
//               id: z.string().optional(),
//               status: z.string().optional(),
//               startTime: z.string().nullish().optional(),
//               completedTime: z.string().nullish().optional(),
//               isCompleted: z.boolean().optional(),
//               isMandatory: z.boolean().nullish().optional(),
//               type: z.string().optional(),
//             })
//           ),
//         })
//       )
//       .optional(),
//   })
// )

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
  PSSE_File: z.array(
    z.object({
      file_key: z.string().min(1, { message: "Input required" }),
      path_to_save_file: z.string().min(1, { message: "Input required" }),
      sav_file_name: z.string().min(1, { message: "Input required" }),
      path_to_dyre_file: z.string().min(1, { message: "Input required" }),
      dyre_file_name: z.string().min(1, { message: "Input required" }),
      path_to_dll_folder: z.string().min(1, { message: "Input required" }),
      case_selection: z.number(),
    })
  ),
})

// type test= z.infer<typeof PSSE_File_Info_Schema_>
