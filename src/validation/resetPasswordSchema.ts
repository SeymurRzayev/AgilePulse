// src/validation/resetPasswordSchema.ts
import * as yup from "yup";
import { emailField } from "../validation/validationSchema";

export const resetPasswordSchema = yup.object({
  email: emailField,
});
