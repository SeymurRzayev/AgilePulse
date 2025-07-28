import { useState, type FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInSchema } from "../../../validation/signInSchema";
import openEye from "../../../assets/icons/Inputeye.svg";
import closeEye from "../../../assets/icons/Inputclosedeye.svg";
import AuthIllustration from "../../../ui/AuthIllustration/AuthIllustration";
import authImgSignIn from "../../../assets/images/authImageSignIn.jpg";
import { useSwipeBack } from "../../../ui/SwipeBack/UseSwipeBack";
import SwipeBackMessage from "../../../ui/SwipeBack/SwipeBackMessage";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MainButton from "../../../components/Butttons/MainButton";
import Swal from "sweetalert2";
import { useLoginMutation } from "../../../services/features/auth/loginApi";
import { useAppDispatch } from "../../../redux/hooks/Hooks";
import { setLoggedUser } from "../../../redux/slices/authSlice";

const SignIn: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useSwipeBack();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSignin = async (values: any) => {
    try {
      const response = await login(values).unwrap();
      dispatch(setLoggedUser(response));

      if (response.role === 'ADMIN') {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Xəta baş verdi!", "Xəta! Yenidən yoxlayın", "error");
    }
  };

  return (
    <div className="w-full h-auto flex flex-row items-center   bg-[#F5F5F5] p-0">
      <SwipeBackMessage />
      <AuthIllustration
        imgSrc={authImgSignIn}
        title="Yenidən bizimləsən!"
        description="Səni təkrar görmək xoşdur"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await handleSignin(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-[50%] min-w-[250px] !gap-y-6 mt-9 mx-auto">
            <div className="w-1/2 flex items-center justify-center flex-col mx-auto gap-y-[60px]">
              <h1 className="text-3xl md:text-[46px] leading-14 font-bold tracking-normal font-[corbel]">
                Daxil ol
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col w-72 md:w-[344px] rounded-xl">
                  <Field
                    name="email"
                    type="email"
                    placeholder="E-mail adress"
                    className="w-full rounded-[30px] border border-[#B0B0B0] px-4 py-3 outline-none placeholder:font-[Corbel] placeholder:text-sm md:placeholder:text-lg placeholder:text-[#00000061] font-[Corbel] hover:border-[#2C4B9B] hover:shadow-[-1px_0px_6px_2px_rgba(44,75,155,0.35)] hover:shadow-[rgba(44,75,155,0.35)] transition-all duration-300 focus:border-[#2C4B9B]"
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
                      className="w-full rounded-[30px] border border-[#B0B0B0] px-4 py-3 outline-none placeholder:font-[Corbel] placeholder:text-sm md:placeholder:text-lg placeholder:text-[#00000061] font-[Corbel] hover:border-[#2C4B9B] hover:shadow-[-1px_0px_6px_2px_rgba(44,75,155,0.35)] hover:shadow-[rgba(44,75,155,0.35)] transition-all duration-300 focus:border-[#2C4B9B]"
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
                <span className="ml-45 md:ml-50"><Link to="/forgotpassword" className=" text-[#566FAF] text-xs md:text-sm font-normal tracking-normal leading-3 md:leading-5 font-[corbel]">*Şifrəni unutmusan?</Link></span>
              </div>
              <div className="w-72 md:w-[344px]">
                <MainButton
                  type="submit"
                  disabled={isSubmitting}
                  buttonClassName="!py-3"
                  text="Daxil ol"
                />
                <span className="text-[#9C9A99] text-xs md:text-sm font-normal tracking-normal leading-[20px] font-[corbel] mt-4">
                  Hesabin var?
                  <Link
                    to="/sign-up"
                    className="text-[#566FAF] text-xs md:text-sm font-normal tracking-normal leading-[20px] font-[corbel] ml-1"
                  >
                    Qeydiyyatdan keç
                  </Link>
                </span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
