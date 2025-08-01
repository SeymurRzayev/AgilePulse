import * as yup from "yup";

const strictEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const emailField = yup
  .string()
  .required("Email ünvanı daxil edilməlidir")
  .min(6, "Minimum 6 simvol olmalıdır")
  .max(254, "Maksimum 254 simvol olmalıdır")
  .matches(strictEmailRegex, "Email ünvanının düzgünlüyünü yoxlayın")
  .test("no-space", "Email ünvanının düzgünlüyünü yoxlayın", (value) =>
    value ? !/\s/.test(value) : true
  );

export const resetPassword = yup.object({
  password: yup
    .string()
    .required("Şifrə daxil edilməlidir")
    .min(8, "Minimum 8 simvol daxil edilməlidir")
    .max(64, "Maksimum 64 simvol daxil edilməlidir")
    .matches(/[A-Z]/, "Ən az 1 böyük hərf olmalıdır")
    .matches(/[a-z]/, "Ən az 1 kiçik hərf olmalıdır")
    .matches(/\d/, "Ən az 1 rəqəm olmalıdır")
    .matches(/[^A-Za-z0-9]/, "Ən az 1 simvol (@#$%! və s.) olmalıdır")
    .test("no-space", "Şifrə boşluq simvolu ehtiva etməməlidir", (value) =>
      value ? !/\s/.test(value) : true
    )
    .test("no-repeated-char", "Şifrə eyni simvoldan 3 və ya daha çox təkrar etməməlidir", (value) => {
      if (!value) return true;
      return !/(.)\1{2,}/.test(value);
    }),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Şifrələr uyğun gəlmir')
    .required('Şifrəni təkrarlayın'),
});


export const passwordField = yup
  .string()
  .required("Şifrə daxil edilməlidir")
  .min(8, "Minimum 8 simvol daxil edilməlidir")
  .max(64, "Maksimum 64 simvol daxil edilməlidir")
  .matches(/[A-Z]/, "Ən az 1 böyük hərf olmalıdır")
  .matches(/[a-z]/, "Ən az 1 kiçik hərf olmalıdır")
  .matches(/\d/, "Ən az 1 rəqəm olmalıdır")
  .matches(/[^A-Za-z0-9]/, "Ən az 1 simvol (@#$%! və s.) olmalıdır")
  .test("no-space", "Şifrə boşluq simvolu ehtiva etməməlidir", (value) =>
    value ? !/\s/.test(value) : true
  )
  .test("no-repeated-char", "Şifrə eyni simvoldan 3 və ya daha çox təkrar etməməlidir", (value) => {
    if (!value) return true;
    return !/(.)\1{2,}/.test(value);
  });

export const signInSchema = yup.object({
  email: emailField,
  password: yup.string().required("Şifrə daxil edilməlidir")
})
