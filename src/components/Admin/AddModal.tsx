import { ErrorMessage, Field, Form, Formik } from 'formik';
import Xicon from '../../assets/icons/Modalcloseicon.svg';
import { useCreateBookMutation, useGetAllBookQuery } from '../../services/features/mainPage/bookApi';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useCreateArticleMutation, useGetAllArticleQuery } from '../../services/features/mainPage/articleApi';
import './Admin.css'


interface ModalProps {
    onClose: () => void;
    isLibraryMode?: boolean;
}

const AddModal = ({ onClose, isLibraryMode }: ModalProps) => {
    const { refetch: refreshBook } = useGetAllBookQuery();
    const { refetch: refreshArticle } = useGetAllArticleQuery();
    const [createBook] = useCreateBookMutation()
    const [createArticle] = useCreateArticleMutation()

    const validationSchema = isLibraryMode
        ? Yup.object({
            name: Yup.string().required('Kitabın adı vacibdir'),
            author: Yup.string().required('Müəllif vacibdir'),
            pdfFile: Yup.mixed().required('PDF faylı vacibdir'),
            image: Yup.mixed().required('Şəkil vacibdir'),
        })
        : Yup.object({
            title: Yup.string().required('Başlıq vacibdir'),
            content: Yup.string().required('Məzmun vacibdir'),
            text: Yup.string().required('Mətn vacibdir'),
            author: Yup.string().required('Müəllif vacibdir'),
            imageUrl: Yup.mixed().required('Şəkil vacibdir'),
        });

    const initialValues = isLibraryMode
        ? {
            name: '',
            author: '',
            pdfFile: '',
            language: '',
            pageCount: '',
            image: '',
        }
        : {
            title: '',
            content: '',
            text: '',
            author: '',
            imageUrl: '',
        };

    const handleCreate = async (values: typeof initialValues) => {
        try {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                if (value) formData.append(key, value);
            });
            if (isLibraryMode) {
                await createBook(formData).unwrap();
                refreshBook()
            } else {
                await createArticle(formData).unwrap();
                refreshArticle()
            }
            Swal.fire('Uğurla', `${isLibraryMode ? 'Kitab' : 'Məqalə'} uğurla əlavə edildi`, 'success');
            onClose();
        } catch (error) {
            Swal.fire('Xəta', 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin', 'error');
            console.error(error);
        }
    };


    const fieldLabels: Record<string, string> = isLibraryMode ? {
        name: 'Kitabın adı',
        author: 'Müəllif',
        language: 'Dil',
        pageCount: 'Səhifə sayı',
        image: 'Şəkil',
        pdfFile: 'PDF faylı',
    } : {
        title: 'Başlıq',
        content: 'Məzmun',
        text: 'Məqalə mətni',
        author: 'Müəllif',
        imageUrl: 'Şəkil',
    };
    const textFields = isLibraryMode
        ? ['name', 'author', 'language', 'pageCount']
        : ['title', 'content', 'text', 'author'];
    const fileFields = isLibraryMode ? ['pdfFile', 'image'] : ['imageUrl'];

    return (
        <div className="fixed z-50 inset-0 flex justify-center items-center bg-black/50 p-4 overflow-y-auto">
            <div className="bg-white relative p-8 rounded-xl w-full max-w-2xl shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer right-4 top-4 text-gray-500 hover:text-gray-800 transition"
                >
                    <img src={Xicon} alt="Bağla" className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold text-center mb-6 text-[#2C4B9B]">Yeni {isLibraryMode ? 'kitab' : 'məqalə'} əlavə et</h2>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleCreate}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className="grid grid-cols-1 sm:grid-cols-2 !gap-4">
                            {textFields.map((field) => (
                                <div key={field} className="flex flex-col">
                                    <label htmlFor={field} className="mb-1 text-sm font-medium text-gray-700">
                                        {fieldLabels[field]}
                                    </label>
                                    <Field
                                        as={field === 'text' ? 'textarea' : 'input'}
                                        id={field}
                                        name={field}
                                        type="text"
                                        placeholder={fieldLabels[field]}
                                        rows={field === 'text' ? 4 : undefined}
                                        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition resize-none"
                                    />
                                    <ErrorMessage
                                        name={field}
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            ))}

                            {/* Fayl sahələri */}

                            {fileFields.map((field) => (
                                <div key={field} className="flex flex-col sm:col-span-2">
                                    <label htmlFor={field} className="mb-1 text-sm font-medium text-gray-700">
                                        {fieldLabels[field]} yüklə
                                    </label>
                                    <input
                                        id={field}
                                        name={field}
                                        type="file"
                                        accept={field === 'pdfFile' ? 'application/pdf' : 'image/*'}
                                        onChange={(e) => {
                                            if (e.currentTarget.files) {
                                                setFieldValue(field, e.currentTarget.files[0]);
                                            }
                                        }}
                                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2C4B9B] file:text-white hover:file:bg-[#1e3576] transition "
                                    />
                                    <ErrorMessage name={field} component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                            ))}



                            {/* Submit düyməsi */}
                            <div className="sm:col-span-2 mt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#2C4B9B] hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)]"
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
