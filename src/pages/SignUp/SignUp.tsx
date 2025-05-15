import { useState } from "react";
import type { FC} from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import styles from "./SignUp.module.css";
import InputField from "../../ui/InputField/InputField";
import AuthIllustration from "../../ui/AuthIllustration/AuthIllustration";
import FormButton from "../../ui/FormButton/FormButton";
import authImage from "../../assets/images/authImage.jpg";
import checkedBox from "../../assets/images/checked.svg";
import uncheckedBox from "../../assets/images/unchecked.svg";

interface FormValues {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}
const SignUp: FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "all" });

  // Handle form submission
  const onSubmit = (data: FormValues) => {
     console.log(data);
    alert("Qeydiyyat uğurla tamamlandı")
  };

  return (
    <div className={styles.signUp}>
   
      <AuthIllustration 
      imgSrc={authImage}
       title="Hədəfə çevik yolla çat!"
        />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1>Qeydiyyat</h1>
        <div className={styles.inputFields}>
          {/* Name input */}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputField placeholder="Ad Soyad" {...field} />
            )}
          />

          {/* Email input with validation */}
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email ünvanının düzgünlüyünü yoxlayın",
              validate: (value) =>
                value.includes("@") || "Email ünvanının düzgünlüyünü yoxlayın",
            }}
            render={({ field }) => (
              <InputField
                type="email"
                placeholder="E-mail adress"
                {...field}
                error={errors.email?.message}
              />
            )}
          />
          {/* Password without validation */}
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Şifrə daxil edilməlidir",
              validate: (value) => {
                const letters = (value.match(/[A-Za-z]/g) || []).length;
                const digits = (value.match(/\d/g) || []).length;
                const symbols = (value.match(/[^A-Za-z0-9]/g) || []).length;

                if (letters < 6 || digits < 2 || symbols < 2) {
                  return "Şifrə minimum 6 hərf, 2 rəqəm və 2 simvol olmalıdır";
                }

                return true;
              },
            }}
            render={({ field }) => (
              <InputField type="password" placeholder="Şifrə"
               {...field} 
               error={errors.password?.message}
              />
            )}
           
          />

          {/* Forgot password link */}
          <div className={styles.forgotPassword}>
            <Link to="/reset-password" className={styles.forgotPasswordLink}>
              *Şifrəni unutmusan?
            </Link>
          </div>

          {/* Remember Me Checkbox */}
          <div className={styles.rememberMeContainer}>
            <div className={styles.checkboxImg}>
              <img
                src={rememberMe ? checkedBox : uncheckedBox}
                alt="Məni yadda saxla"
                onClick={() => setRememberMe(!rememberMe)}
              />
            </div>
            <p className={styles.rememberMeTitle}>Məni yadda saxla</p>
          </div>
        </div>

        {/*  Submit button and login link */}
        <div className={styles.submitButtonAndLoginLink}>
          <FormButton
            type="submit"
            onClick={handleSubmit(onSubmit)}
            children="Qeydiyyatdan keç"
          />
          <div className={styles.loginLinkContainer}>
            <span>Hesabin var?</span>
            <Link to="/sign-in" className={styles.loginLink}>
              Daxil ol
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
