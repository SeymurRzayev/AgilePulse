import { Formik, Form, Field, ErrorMessage } from 'formik';
import MainButton from '../../../components/Butttons/MainButton';
import openEye from '../../../assets/icons/Inputeye.svg'
import closeEye from '../../../assets/icons/Inputclosedeye.svg'
import { useState } from 'react';
import { resetPassword } from '../../../validation/signInSchema';
import { useNavigate, useParams } from 'react-router-dom';
import { useResetPasswordMutation } from '../../../services/features/forgotPasswordApi';
import Swal from 'sweetalert2';


const initialValues = {
    password: '',
    confirmPassword: '',
};

const ResetPassword = () => {

    const navigate = useNavigate()
    const params = useParams();
    const token = params.token ?? "";

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
    const [resetPasswordReq] = useResetPasswordMutation()

    const handlechangePassword = async (values: any) => {
        try {
            await resetPasswordReq({ password: values, token }).unwrap()
            Swal.fire("Uğurlu!", "Şifrə yeniləndi", "success")
            navigate('/sign-in')
        } catch (error) {
            Swal.fire("Xəta baş verdi!", "Yenidən yoxlayın", "error")
        }
    }


    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='mx-auto'>
                <h1 className='text-[28px] md:text-[46px] font-[Corbel] font-bold text-center text-[#000000DE]'>Şifrənin bərpa olunması</h1>
                <h5 className='font-[Corbel] pt-2 text-base md:text-lg font-normal text-[#00000099] text-center'>Yeni şifrə yarat və təkrar et.</h5>
                <Formik
                    initialValues={initialValues}
                    validationSchema={resetPassword}
                    onSubmit={(values, { setSubmitting }) => {
                        handlechangePassword(values);
                        setSubmitting(false);
                    }}
                >
                    {
                        ({ isSubmitting }) => (
                            <Form
                                className='w-[60%] sm:w-[80%] md:w-full min-w-[250px] !gap-y-6 mt-9 mx-auto'
                            >
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
                                <div className="flex flex-col w-full">
                                    <div className="relative">
                                        <Field
                                            name='confirmPassword'
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Təkrar et"
                                            className="w-full rounded-[30px] border border-[#B0B0B0] px-4 py-3 outline-none placeholder:font-[Corbel] placeholder:text-lg placeholder:text-[#00000061] font-[Corbel] hover:border-[#2C4B9B] focus:border-[#2C4B9B]"

                                        />
                                        <div
                                            className='absolute inset-y-0 right-0 flex items-center cursor-pointer pr-4'
                                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        >
                                            <img
                                                className="w-4 h-5"
                                                src={showConfirmPassword ? openEye : closeEye}
                                            />
                                        </div>
                                    </div>
                                    <ErrorMessage
                                        name='confirmPassword'
                                        component="div"
                                        className='text-sm mt-1 text-[#E70303]'
                                    />
                                </div>
                                <MainButton disabled={isSubmitting} buttonClassName='!py-3' text='Submit' />
                            </Form>
                        )
                    }
                </Formik>
            </div>
            {/* Turn to back */}
        </div>
    )
}

export default ResetPassword