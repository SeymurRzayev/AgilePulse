import { ErrorMessage, Field, Form, Formik } from 'formik';
import Xicon from '../../assets/icons/Modalcloseicon.svg';
import { useCreateBookMutation } from '../../services/features/mainPage/bookApi';
import Swal from 'sweetalert2';
import * as Yup from 'yup';



interface ModalProps {
    onClose: () => void;
}

const AddModal = ({ onClose }: ModalProps) => {

    const [create] = useCreateBookMutation()

    const validationSchema = Yup.object({
        name: Yup.string().required('Kitabın adı vacibdir'),
        author: Yup.string().required('Müəllif vacibdir'),
        pdfFile: Yup.mixed().required('PDF faylı vacibdir'),
        image: Yup.mixed().required('Şəkil vacibdir'),
    });

    const initialValues = {
        name: '',
        author: '',
        pdfFile: '',
        language: '',
        pageCount: '',
        image: '',
    };

    const handleCreate = async (values: typeof initialValues) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('author', values.author);
            formData.append('language', values.language);
            formData.append('pageCount', values.pageCount);
            formData.append('image', values.image);
            formData.append('pdfFile', values.pdfFile);
            await create(formData).unwrap()
            Swal.fire('Uğurlu', 'Kitab uğurla əlavə edildi', 'success')
            onClose();
        } catch (error) {
            Swal.fire('Xəta', 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin', 'error')
            console.error(error);
        }
    };

    const fieldLabels: Record<string, string> = {
        name: 'Kitabın adı',
        author: 'Müəllif',
        language: 'Dil',
        pageCount: 'Səhifə sayı',
        image: 'Şəkil',
        pdfFile: 'PDF faylı',
    };

    return (
        <div className="fixed z-50 inset-0 flex justify-center items-center bg-black/50 p-4 overflow-y-auto">
            <div className="bg-white relative p-8 rounded-xl w-full max-w-2xl shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer right-4 top-4 text-gray-500 hover:text-gray-800 transition"
                >
                    <img src={Xicon} alt="Bağla" className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold text-center mb-6 text-[#2C4B9B]">Yeni kitab əlavə et</h2>

                <Formik initialValues={initialValues} onSubmit={handleCreate} validationSchema={validationSchema}>
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className="grid grid-cols-1 sm:grid-cols-2 !gap-4">
                            {['name', 'author', 'language', 'pageCount'].map((field) => (
                                <div key={field} className="flex flex-col">
                                    <label htmlFor={field} className="mb-1 text-sm font-medium text-gray-700">
                                        {fieldLabels[field]}
                                    </label>
                                    <Field
                                        id={field}
                                        name={field}
                                        type="text"
                                        placeholder={fieldLabels[field]}
                                        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
                                    />
                                    <ErrorMessage
                                        name={field}
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            ))}

                            <div className="flex flex-col sm:col-span-2">
                                <label htmlFor="pdfFile" className="mb-1 text-sm font-medium text-gray-700">
                                    PDF faylı yüklə
                                </label>
                                <input
                                    id="pdfFile"
                                    name="pdfFile"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={(e) => {
                                        if (e.currentTarget.files) {
                                            setFieldValue('pdfFile', e.currentTarget.files[0]);
                                        }
                                    }}
                                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:cursor-pointer file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2C4B9B] file:text-white hover:file:bg-[#1e3576] transition"
                                />
                                <ErrorMessage
                                    name="pdfFile"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            <div className="flex flex-col sm:col-span-2">
                                <label htmlFor="image" className="mb-1 text-sm font-medium text-gray-700">
                                    Şəkil yüklə
                                </label>
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.currentTarget.files) {
                                            setFieldValue('image', e.currentTarget.files[0]);
                                        }
                                    }}
                                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2C4B9B] file:cursor-pointer file:text-white hover:file:bg-[#1e3576] transition"
                                />
                                <ErrorMessage
                                    name="image"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div className="sm:col-span-2 mt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#2C4B9B] hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition"
                                >
                                    {isSubmitting ? 'Göndərilir...' : 'Yadda saxla'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddModal;
