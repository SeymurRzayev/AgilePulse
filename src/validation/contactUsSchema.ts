import * as yup from "yup";

export const nameSchema = yup
  .string()
  .required("Ad daxil edilməlidir.")
.matches(/^[A-Za-zƏəÖöÜüĞğÇçŞşİı\s]+$/, "Ad və soyad yalnız hərflərdən ibarət olmalıdır")

export const emailField = yup
  .string()
  .required("Email daxil edilməlidir.")
  .email("Email formatı düzgün deyil");

export const messageSchema = yup
  .string()
  .required("Mesaj daxil edilməlidir.")
  .min(10, "Mesaj çox qısadır. Ən azı 10 simvol olmalıdır.");

export const contactUsSchema = yup.object({
  name: nameSchema,
  email: emailField,
  message: messageSchema,
});
