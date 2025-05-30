import * as yup from "yup";
import { emailField, messageSchema, nameSchema } from "./validationSchema";

export const contactUsSchema = yup.object({
  message: messageSchema,
  name: nameSchema,
  email: emailField,
});
