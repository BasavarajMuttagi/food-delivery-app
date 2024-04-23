import z from "zod";
const userLoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password cannot be less than 8 digits" })
    .max(10, { message: "password cannot be more than 10 digits" }),
});

type userLoginType = z.infer<typeof userLoginSchema>;

const userSignUpSchema = z
  .object({
    fullname: z.string().min(3).max(50),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "password cannot be less than 8 digits" })
      .max(10, { message: "password cannot be more than 10 digits" }),
    confirmpassword: z
      .string()
      .min(8, { message: "password cannot be less than 8 digits" })
      .max(10, { message: "password cannot be more than 10 digits" }),
    phone: z.string().min(10).max(13),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    address: z.string(),
  })
  .refine((data) => data.password == data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"],
  });

type userSignUpType = z.infer<typeof userSignUpSchema>;

const userPasswordResetSchema = z.object({
  email: z.string().email(),
});
type userPasswordResetType = z.infer<typeof userPasswordResetSchema>;

const userSetNewPasswordSchema = z
  .object({
    userId: z.string().min(1),
    password: z
      .string()
      .min(8, { message: "password cannot be less than 8 digits" })
      .max(10, { message: "password cannot be more than 10 digits" }),
    confirmpassword: z
      .string()
      .min(8, { message: "password cannot be less than 8 digits" })
      .max(10, { message: "password cannot be more than 10 digits" }),
  })
  .refine((data) => data.password == data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"],
  });
type userSetNewPasswordType = z.infer<typeof userSetNewPasswordSchema>;

export {
  userLoginSchema,
  userSignUpSchema,
  userPasswordResetSchema,
  userSetNewPasswordSchema,
};
export type {
  userLoginType,
  userSignUpType,
  userPasswordResetType,
  userSetNewPasswordType,
};
