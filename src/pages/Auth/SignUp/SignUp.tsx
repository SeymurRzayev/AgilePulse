import { useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
// validation
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../validation/signUpSchema";

import styles from "./SignUp.module.css";
// ui components
import InputField from "../../../ui/InputField/InputField";
import AuthIllustration from "../../../ui/AuthIllustration/AuthIllustration";
import FormButton from "../../../ui/FormButton/FormButton";
import authImage from "../../../assets/images/authImage.jpg";
import checkedBox from "../../../assets/images/checked.svg";
import uncheckedBox from "../../../assets/images/unchecked.svg";
// Hook for swipe back functionality
import SwipeBackMessage from "../../../ui/SwipeBack/SwipeBackMessage";
import { useSwipeBack } from "../../../ui/SwipeBack/UseSwipeBack";

interface FormValues {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

const SignUp: FC = () => {
  useSwipeBack();
  const [rememberMe, setRememberMe] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(signUpSchema), mode: "all" });

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log(data);
    // OTP səhifəsinə yönləndir - alternative method
    window.location.href = "/auth/otp";
    // və ya
    // window.location.href = "/otp";
  };

  return (
    <div className={styles.signUp}>
       <SwipeBackMessage />
      <AuthIllustration imgSrc={authImage} title="Hədəfə çevik yolla çat!" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1>Qeydiyyat</h1>
        <div className={styles.inputFields}>
          {/* Name input */}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputField
                placeholder="Ad Soyad"
                {...field}
                onChange={(e) => {
                  let value = e.target.value.replace(
                    /[^A-Za-zƏəÖöÜüÇçĞğİıŞş\s]/g,
                    ""
                  );
                  value = value.slice(0, 50);
                  field.onChange({ target: { value } });
                }}
                error={errors.name?.message}
              />
            )}
          />

          {/* Email input with validation */}
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email ünvanı daxil edilməlidir",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email ünvanının düzgünlüyünü yoxlayın",
              },
            }}
            render={({ field }) => (
              <InputField
                type="email"
                placeholder="E-mail adress"
                {...field}
                onChange={(e) => {
                  const value = e.target.value.slice(0, 254); // Max 254 characters
                  field.onChange({ target: { value } });
                }}
                error={errors.email?.message}
                noSpace
              />
            )}
          />
          {/* Password without validation */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <InputField
                type="password"
                name={field.name}
                placeholder="Şifrə"
                defaultValue=''
                onChange={(e) => {
                  const value = e.target.value.slice(0, 64);
                  field.onChange({ target: { value } });
                }}
                onBlur={field.onBlur}
                error={errors.password?.message}
                noSpace
              />
            )}
          />

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