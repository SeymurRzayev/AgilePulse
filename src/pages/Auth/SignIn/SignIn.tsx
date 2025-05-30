import { useState, type FC } from "react";
import styles from "./SignIn.module.css";
import { signInSchema } from "../../../validation/signInSchema";
import openEye from '../../../assets/icons/Inputeye.svg'
import closeEye from '../../../assets/icons/Inputclosedeye.svg'
import AuthIllustration from "../../../ui/AuthIllustration/AuthIllustration";
import authImgSignIn from "../../../assets/images/authImageSignIn.jpg";
// Hook for swipe back functionality
import { useSwipeBack } from "../../../ui/SwipeBack/UseSwipeBack";
import SwipeBackMessage from "../../../ui/SwipeBack/SwipeBackMessage";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MainButton from "../../../components/Butttons/MainButton";
import Swal from "sweetalert2";

//  validation schema for sign-in form

const SignIn: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  useSwipeBack();

  const initialValues = {
    email: "",
    password: ""
  }

  const handleSignin = (values: any) => {
    try {
      console.log(values)

    } catch (error) {
      console.log(error)
      Swal.fire("Xəta baş verdi!", "Xəta! Yenidən yoxlayın", "error")
    }
  }

  return (
    <div className={styles.signIn}>
      <SwipeBackMessage />
      <AuthIllustration
        imgSrc={authImgSignIn}
        title="Yenidən bizimləsən!"
        description="Səni təkrar görmək xoşdur"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSignin(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form
            className='w-[50%] min-w-[250px] !gap-y-6 mt-9 mx-auto'
          >
            <div className="w-1/2 flex items-center justify-center flex-col mx-auto h-screen">
              <div className='flex flex-col w-full'>
                <Field
                  name='email'
                  type='email'
                  placeholder="email"
                  className="w-full rounded-[30px] border border-[#B0B0B0] px-4 py-3 outline-none placeholder:font-[Corbel] placeholder:text-lg placeholder:text-[#00000061] font-[Corbel] hover:border-[#2C4B9B] focus:border-[#2C4B9B]"
                />
                <ErrorMessage
                  name='email'
                  component="div"
                  className='text-[#E70303] text-sm mt-1'
                />
              </div>
              <div className='flex flex-col w-full'>
                <div className="relative">
                  <Field
                    name='password'
                    type={showPassword ? "text" : "password"}
                    placeholder="Yeni şifrə"
                    className="w-full rounded-[30px] border border-[#B0B0B0] px-4 py-3 outline-none placeholder:font-[Corbel] placeholder:text-lg placeholder:text-[#00000061] font-[Corbel] hover:border-[#2C4B9B] focus:border-[#2C4B9B]"
                  />
                  <div
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center cursor-pointer pr-4"
                  >
                    <img
                      className="w-4 h-5"
                      src={showPassword ? openEye : closeEye}
                    />
                  </div>
                </div>
              </div>
              <MainButton type="submit" disabled={isSubmitting} buttonClassName='!py-3' text='Submit' />
            </div>
          </Form>
        )}

      </Formik>
    </div>
  );
};

export default SignIn;
