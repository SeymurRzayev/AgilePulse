import { Formik, Form, Field, ErrorMessage } from 'formik';

export interface FieldConfigQuestion {
    name: string;
    type: 'text';
}

interface FormikFormWrapperProps {
    initialValues: any;
    validationSchema: any;
    onSubmit: (values: any) => void;
    fields: FieldConfigQuestion[];
    fieldLabels: Record<string, string>;
    isEdit?: boolean;
}

const QuestionsForm = ({
    initialValues,
    validationSchema,
    onSubmit,
    fields,
    fieldLabels,
    isEdit = false,
}: FormikFormWrapperProps) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue, isSubmitting }) => (
                <Form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {fields.map((field) => (
                            <div
                                key={field.name}
                                className={`w-full ${field.name === 'content' ? 'sm:col-span-2' : ''}`}
                            >
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    {fieldLabels[field.name]}
                                </label>
                                <Field
                                    type="text"
                                    name={field.name}
                                    placeholder={fieldLabels[field.name]}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                />
                                <ErrorMessage
                                    name={field.name}
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />

                                {field.name !== 'content' && (
                                    <div className="mt-1 flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="correctAnswer"
                                            value={field.name}
                                            checked={values.correctAnswer === field.name}
                                            onChange={() => setFieldValue('correctAnswer', field.name)}
                                        />
                                        <span className="text-sm text-gray-600">Düzgün cavab kimi işarələ</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <ErrorMessage
                        name="correctAnswer"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                    />

                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full cursor-pointer bg-[#2C4B9B] hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition"
                        >
                            {isSubmitting ? 'Göndərilir...' : isEdit ? 'Redaktə et' : 'Əlavə et'}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default QuestionsForm;
