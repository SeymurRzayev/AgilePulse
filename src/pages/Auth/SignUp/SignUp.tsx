import { useState } from "react";
import type { FC } from "react";
import styles from "./SignUp.module.css";
import AuthIllustration from "../../../ui/AuthIllustration/AuthIllustration";
import authImage from "../../../assets/images/authImage.jpg";
import openEye from '../../../assets/icons/Inputeye.svg'
import closeEye from '../../../assets/icons/Inputclosedeye.svg'
import SwipeBackMessage from "../../../ui/SwipeBack/SwipeBackMessage";
import { useSwipeBack } from "../../../ui/SwipeBack/UseSwipeBack";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpSchema } from "../../../validation/signUpSchema";
import MainButton from "../../../components/Butttons/MainButton";
import { useSignUpMutation } from "../../../services/features/signUpApi";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";



const SignUp: FC = () => {
  // const navigate = useNavigate()
  useSwipeBack();
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const [createUser, { status, error }] = useSignUpMutation()

  console.log(status, ' status')
  console.log(error, ' error')

  const initialValues = {
    fullName: '',
    email: '',
    password: ''
  }

  const handleCreateUser = async (values: any) => {
    try {
      await createUser(values).unwrap()
      // console.log(res.originalStatus, 'dasdasdsadas')
    } catch (error) {

      // Swal.fire('Xəta baş verdi!', 'Xəta baş verdi!', 'error')
      console.log(error)
    }
  }


  return (
    <div className={styles.signUp}>
      <SwipeBackMessage />
      <AuthIllustration imgSrc={authImage} title="Hədəfə çevik yolla çat!" />
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleCreateUser(values);
          setSubmitting(false);
        }}
      >
        {
          ({ isSubmitting }) => (
            <Form
              className='w-[50%] min-w-[250px] !gap-y-6 mt-9 mx-auto'
            >
              <div className="w-1/2 flex items-center justify-center flex-col mx-auto h-screen">
                <div className='flex flex-col w-full'>
                  <Field
                    name='fullName'
                    type='text'
                    placeholder="Ad"
                    className="w-full rounded-[30px] border border-[#B0B0B0] px-4 py-3 outline-none placeholder:font-[Corbel] placeholder:text-lg placeholder:text-[#00000061] font-[Corbel] hover:border-[#2C4B9B] focus:border-[#2C4B9B]"
                  />
                  <ErrorMessage
                    name='fullName'
                    component="div"
                    className='text-[#E70303] text-sm mt-1'
                  />
                </div>
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
                  <ErrorMessage
                    name='password'
                    component="div"
                    className='text-[#E70303] text-sm mt-1'
                  />
                </div>
                <MainButton type="submit" disabled={isSubmitting} buttonClassName='!py-3' text='Submit' />
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default SignUp;