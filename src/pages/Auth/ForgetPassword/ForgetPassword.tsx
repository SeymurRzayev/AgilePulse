import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../../ui/InputField/InputField";
import { Link } from "react-router-dom";
//validation
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from "../../../validation/resetPasswordSchema";
//ui components
import AuthIllustration from "../../../ui/AuthIllustration/AuthIllustration";
import styles from "./ForgetPassword.module.css";
import FormButton from "../../../ui/FormButton/FormButton";
import authImage from "../../../assets/images/authImage.jpg";
// Hook for swipe back functionality
import SwipeBackMessage from "../../../ui/SwipeBack/SwipeBackMessage";
import { useSwipeBack } from "../../../ui/SwipeBack/UseSwipeBack";

// Interface to define the structure of form data (email in this case)
interface ResetForm {
  email: string;
}
// Using React Hook Form to handle form state and validation
const ForgetPassword: React.FC = () => {
  useSwipeBack(); 
  const { control,
     handleSubmit 
    } = useForm<ResetForm>({resolver:yupResolver(resetPasswordSchema),
    mode: "all",
  });

  // Here you can make an API request to send a reset password link
  const onSubmit = (data: ResetForm) => {
    console.log("Şifrə yeniləmə emaili:", data.email);
  };

  return (
    <div className={styles.resetPasswordContainer}>
      <SwipeBackMessage />
      {/* Illustration on the page (used for visual aid) */}
      <AuthIllustration
        imgSrc={authImage}
        title="Hədəfə çevik yolla çat!"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.resetPasswordForm}
      >
        <h1>Şifrəni Yenilə</h1>
        {/* Email input with validation using Controller from React Hook Form */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "E-mail ünvanının düzgünlüyünü yoxlayın",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "E-mail ünvanının düzgünlüyünü yoxlayın",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="email"
              placeholder="E-mail adress"
              {...field}
              error={fieldState.error?.message}
              noSpace
            />
          )}
        />

        {/* Button and Link to Sign In */}
        <div className={styles.buttonAndLinkContainer}>
          <FormButton type="submit" onClick={() => {}} children="Göndər" />
          {/* Link to Sign In page */}
          <div className={styles.linkContainer}>
            <span>Hesabin var?</span>
            <Link to="/sign-in" className={styles.link}>
              Daxil ol
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
