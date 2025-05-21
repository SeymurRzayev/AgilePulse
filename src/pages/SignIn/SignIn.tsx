import type { FC } from "react";
import styles from "./SignIn.module.css";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthIllustration from "../../ui/AuthIllustration/AuthIllustration";
import FormButton from "../../ui/FormButton/FormButton";
import InputField from "../../ui/InputField/InputField";
import authImgSignIn from "../../assets/images/authImageSignIn.jpg";
interface LoginForm {
  email: string;
  password: string;
  error: string;
}
const SignIn: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "all",
  });
  // onSubmit function
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

        {/* Input fields(email, password) */}

        <div className={styles.inputFields}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email ünvanının düzgünlüyünü yoxlayın",
            }}
            render={({ field, fieldState }) => (
              <InputField
                placeholder="E-mail adress"
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: "Şifrə daxil edilməlidir",
              validate: (value) => {
                const letters = (value.match(/[A-Za-z]/g) || []).length;
                const digits = (value.match(/\d/g) || []).length;
                const symbols = (value.match(/[^A-Za-z0-9]/g) || []).length;
                const hasSpace = /\s/.test(value);

                if (hasSpace) {
                  return "Şifrə boşluq simvolu ehtiva etməməlidir";
                }
                if (letters < 6 || digits < 2 || symbols < 2) {
                  return "Şifrə minimum 6 hərf, 2 rəqəm və 2 simvol olmalıdır";
                }

                return true;
              },
            }}
            render={({ field }) => (
              <InputField
                type="password"
                placeholder="Şifrə"
                {...field}
                error={errors.password?.message}
              />
            )}
          />
          {/* Forgot password link */}
          <div className={styles.forgotPasswordContainer}>
            <Link to="/reset-password" className={styles.forgotPasswordLink}>
              *Şifrəni unutmusan?
            </Link>
          </div>
        </div>

        <div className={styles.buttonAndLinkContainer}>
          <FormButton type="submit" onClick={() => {}} children="Daxil ol" />
          {/* sign up link  */}
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
