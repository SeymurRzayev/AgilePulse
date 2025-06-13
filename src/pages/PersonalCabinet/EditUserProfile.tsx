import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../../pages/PersonalCabinet/personalCabinet.module.css';
import Button from '../../ui/Button/Button';
import Image from "../../components/ImageComponent";
import choose from "../../assets/images/choose.png";
import { useRef } from 'react';
import MainButton from '../../components/Butttons/MainButton';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/Hooks';
import { useEditUserMutation, useUpdatePhotoMutation } from '../../services/features/userApi';
import { toast } from "react-toastify";
import { setLoggedUser } from '../../redux/slices/authSlice';
import Swal from 'sweetalert2';

const EditUserProfile = () => {
    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch()
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [updateUser, { isLoading }] = useEditUserMutation();
    const [updatePhoto] = useUpdatePhotoMutation();


    const initialValues = {
        fullName: user?.fullName || '',
        position: user?.position || '',
        email: user?.email || '',
        description: user?.description || '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Ad boş ola bilməz'),
        position: Yup.string().required('Vəzifə boş ola bilməz'),
        email: Yup.string().email('Yanlış email').required('Email boş ola bilməz'),
        description: Yup.string(),
    });

    const handleSubmit = async (values: typeof initialValues) => {
        const result = await Swal.fire({
            title: 'Əminsiniz?',
            text: 'Məlumatlarınızı dəyişdirmək istədiyinizdən əminsiniz?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Bəli, dəyişdir!',
            cancelButtonText: 'Ləğv et'
        });

        if (!result.isConfirmed) {
            return;
        }

        try {
            await updateUser({ userId: user?.id!, data: values }).unwrap();
            dispatch(setLoggedUser({ ...user!, ...values }));
            localStorage.setItem("user", JSON.stringify({ ...user!, ...values }));
            toast.success('Məlumatlar uğurla yeniləndi!');
        } catch (err) {
            toast.error('Xəta baş verdi!');
        }
    };

    const handleChangePhoto = async () => {
        const file = fileInputRef.current?.files?.[0];
        if (!file) return;
        const formData = new FormData();
        formData.append('image', file);
        console.log(file)
        console.log(formData)
        try {
            const res = await updatePhoto({ id: user?.id!, data: formData }).unwrap()
            console.log(res)
            dispatch(setLoggedUser({ ...user!, profileImage: res.profileImageUrl }));
            localStorage.setItem("user", JSON.stringify({ ...user!, profileImage: res.profileImageUrl }));
            toast.success('Şəkil uğurla yeniləndi!');
        } catch (error) {
            toast.error('Xəta baş verdi!');
        }
    }

    return (
        <div className='w-full mt-[53px] gap-0 xl:gap-15 flex justify-center pb-5 flex-col-reverse lg:items-start items-center lg:flex-row '>
            <div className={`${styles.editSection} w-full`}>
                <h2 style={{ fontFamily: 'Corbel' }} className='text-[#000000DE] font-semibold text-3xl mt-10 lg:mt-0 cursor-default'>
                    Şəxsi məlumatlar
                </h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    <Form className='w-full px-9 lg:px-0 lg:w-4/5 mt-10 mx-auto edit-profile !gap-y-6'>
                        {['fullName', 'position', 'email', 'description'].map((field, index) => (
                            <div key={index}>
                                <Field
                                    name={field}
                                    as={field === 'description' ? 'textarea' : 'input'}
                                    type={field === 'email' ? 'email' : 'text'}
                                    className='!text-[#000000DE] w-full'
                                    placeholder={
                                        field === 'fullName' ? 'Ad Soyad' :
                                            field === 'position' ? 'Vəzifə' :
                                                field === 'email' ? 'Email' : 'Haqqımda'
                                    }
                                />
                                <ErrorMessage name={field} component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                        ))}

                        <Button
                            title={isLoading ? "Yenilənir..." : "Yadda saxla"}
                            className="w-full py-[12px] px-[24px] bg-[#2C4B9B]"
                            type="submit"
                            disabled={isLoading}
                        />
                    </Form>
                </Formik>
            </div>

            <div className={`flex flex-col justify-start items-center w-1/2 mr-4 gap-8 `}>
                <h2 style={{ fontFamily: 'Corbel' }} className='text-[#000000DE] font-semibold text-3xl cursor-default'>Photo</h2>
                <Image src={user?.profileImage ? user?.profileImage : choose} className={' object-contain  rounded-4xl w-[300px]  lg:w-[373px] '} />
                <input type="file" ref={fileInputRef} hidden onChange={handleChangePhoto} />
                <MainButton
                    text="Qalereyadan seç"
                    className="w-[200px] h-[48px]"
                    onClick={() => fileInputRef.current?.click()}
                />
            </div>
        </div>
    );
};

export default EditUserProfile;
