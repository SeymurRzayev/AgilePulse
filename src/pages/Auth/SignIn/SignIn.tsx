import type { FC } from "react";
import styles from "./SignIn.module.css";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from "../../../validation/signInSchema";
import type { InferType } from "yup";
// UI
import AuthIllustration from "../../../ui/AuthIllustration/AuthIllustration";
import FormButton from "../../../ui/FormButton/FormButton";
import InputField from "../../../ui/InputField/InputField";
import authImgSignIn from "../../../assets/images/authImageSignIn.jpg";

//  Tip validationdan gəlir
type LoginForm = InferType<typeof signInSchema>;

const SignIn: FC = () => {
  const {
    control,
    handleSubmit,
  } = useForm<LoginForm>({
    resolver: yupResolver(signInSchema),
    mode:'all',
  });

  const onSubmit = (data: LoginForm) => {
    console.log("Daxil olunmuş məlumatlar:", data);
  };

  return (
    <div className={styles.signIn}>
      <AuthIllustration
        imgSrc={authImgSignIn}
        title="Yenidən bizimləsən!"
        description="Səni təkrar görmək xoşdur"
      />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.signInForm}>
        <h1>Daxil ol</h1>

        <div className={styles.inputFields}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                placeholder="E-mail adress"
                {...field}
                onChange={(e) => {
        const value = e.target.value.slice(0, 254);
        const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
        field.onChange({ target: { value: capitalized } });
      }}
                error={fieldState.error?.message}
                noSpace
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                type="password"
                placeholder="Şifrə"
                {...field}
                    onChange={(e) => {
                  const value = e.target.value.slice(0, 64);
                  field.onChange({ target: { value } });
                }}
                error={fieldState.error?.message}
                noSpace
              />
            )}
          />

          <div className={styles.forgotPasswordContainer}>
            <Link to="/forgetpassword" className={styles.forgotPasswordLink}>
              *Şifrəni unutmusan?
            </Link>
          </div>
        </div>

        <div className={styles.buttonAndLinkContainer}>
          <FormButton type="submit" 
          onClick={() => {}}>
            Daxil ol
          </FormButton>

          <div className={styles.linkContainer}>
            <p>Hesabın yoxdur?</p>
            <Link to="/sign-up" className={styles.registerLink}>
              Qeydiyyatdan keçin
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
