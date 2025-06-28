import { useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import AuthIllustration from "../../../ui/AuthIllustration/AuthIllustration";
import authImage from "../../../assets/images/authImage.jpg";
import openEye from "../../../assets/icons/Inputeye.svg";
import closeEye from "../../../assets/icons/Inputclosedeye.svg";
import SwipeBackMessage from "../../../ui/SwipeBack/SwipeBackMessage";
import { useSwipeBack } from "../../../ui/SwipeBack/UseSwipeBack";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpSchema } from "../../../validation/signUpSchema";
import MainButton from "../../../components/Butttons/MainButton";
import { useSignUpMutation } from "../../../services/features/auth/signUpApi";
// import checked from "../../../assets/images/checked.svg";
// import unchecked from "../../../assets/images/unchecked.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp: FC = () => {
  const navigate = useNavigate()
  // const [rememberMe, setRememberMe] = useState(false);
  useSwipeBack();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [createUser] = useSignUpMutation()


  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    // rememberMe: false,
  };

  const handleCreateUser = async (values: any) => {
    try {
      await createUser(values).unwrap()
      navigate(`/auth/otp/${values.email}`)
    } catch (error: any) {
      error?.status === 409
        ? Swal.fire('Xəta baş verdi!', 'Siz artıq qeydiyyatdan keçmisiniz', 'error')
        : Swal.fire('Xəta baş verdi!', 'Xəta baş verdi!', 'error')
    }
  }

  return (
    <div className="w-full h-auto flex flex-row items-center   bg-[#F5F5F5] p-0">
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
        {({ isSubmitting }) => (
          <Form className="w-[50%] min-w-[250px] !gap-y-6 mt-9 mx-auto">
            <div className="w-1/2 flex items-center justify-center flex-col mx-auto gap-y-[60px]">
              <h1 className="text-[46px] leading-14 font-bold tracking-normal font-[corbel]">
                Qeydiyyat
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col w-[344px] rounded-xl">
                  <Field
                    name="fullName"
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full rounded-[30px] border border-[#B0B0B0] px-4 py-3 outline-none placeholder:font-[Corbel] placeholder:text-lg placeholder:text-[#00000061] font-[Corbel] hover:border-[#2C4B9B] hover:shadow-[-1px_0px_6px_2px_rgba(44,75,155,0.35)] hover:shadow-[rgba(44,75,155,0.35)] transition-all duration-300 focus:border-[#2C4B9B]"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-[#E70303] text-sm mt-1"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <Field
                    name="email"
                    type="email"
                    placeholder="E-mail adress"
                    className="w-full rounded-[30px] border border-[#B0B0B0] px-4 py-3 outline-none placeholder:font-[Corbel] placeholder:text-lg placeholder:text-[#00000061] font-[Corbel] hover:border-[#2C4B9B] hover:shadow-[-1px_0px_6px_2px_rgba(44,75,155,0.35)] hover:shadow-[rgba(44,75,155,0.35)] transition-all duration-300 focus:border-[#2C4B9B]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-[#E70303] text-sm mt-1"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="relative">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Şifrə"
                      className="w-full rounded-[30px] border border-[#B0B0B0] px-4 py-3 outline-none placeholder:font-[Corbel] placeholder:text-lg placeholder:text-[#00000061] font-[Corbel]  hover:border-[#2C4B9B] hover:shadow-[-1px_0px_6px_2px_rgba(44,75,155,0.35)] transition-all duration-300 focus:border-[#2C4B9B]"
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
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-[#E70303] text-sm mt-1"
                    />
                  </div>
                </div>
                {/* <div className="flex items-center gap-2">
                  <img
                    src={rememberMe ? checked : unchecked}
                    alt="Məni yadda saxla"
                    onClick={() => setRememberMe(!rememberMe)}
                  />
                  <span className="text-[14px] font-normal tracking-normal leading-[20px]">Məni yadda saxla</span>
                </div> */}
              </div>

              <div className="w-[344px]">
                <MainButton
                  type="submit"
                  disabled={isSubmitting}
                  buttonClassName="!py-3"
                  text="Qeydiyyatdan keç"
                />
                <span className="text-[#9C9A99] text-[14px] font-normal tracking-normal leading-[20px] font-[corbel] mt-4">Hesabin var?
                  <Link to="/sign-in"
                    className="text-[#566FAF] text-[14px] font-normal tracking-normal leading-[20px] font-[corbel] ml-1">Daxil ol</Link></span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
