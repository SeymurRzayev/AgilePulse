import { Formik, Form, Field, ErrorMessage } from 'formik';
import AutoComplateInp from '../../General/AutoComplateInp';

export interface FieldConfig {
    name: string;
    type: 'text' | 'textarea' | 'file' | 'autocomplete';
    accept?: string;
    colSpan?: number;
}

interface DynamicFormProps {
    fields: FieldConfig[];
    fieldLabels: Record<string, string>;
    validationSchema: any;
    initialValues: any;
    onSubmit: (values: any) => Promise<void>;
    submitLabel?: string;
    categoryOptions?: { id: number; name: string }[];
}

const TrainingForm = ({
    fields,
    fieldLabels,
    validationSchema,
    initialValues,
    onSubmit,
    submitLabel = 'Yadda saxla',
    categoryOptions
}: DynamicFormProps) => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ setFieldValue, isSubmitting }) => (
                <Form className="grid grid-cols-1 sm:grid-cols-2 !gap-4">
                    {fields.map(({ name, type, accept, colSpan = 1 }) => (
                        <div
                            key={name}
                            className={`flex flex-col ${colSpan === 2 ? 'sm:col-span-2' : ''}`}
                        >
                            <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
                                {fieldLabels[name]}
                            </label>

                            {type === 'file' ? (
                                <input
                                    id={name}
                                    name={name}
                                    type="file"
                                    accept={accept}
                                    onChange={(e) => {
                                        if (e.currentTarget.files) {
                                            setFieldValue(name, e.currentTarget.files[0]);
                                        }
                                    }}
                                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2C4B9B] file:text-white hover:file:bg-[#1e3576] transition"
                                />
                            ) : type === 'autocomplete' ? (
                                <AutoComplateInp
                                    name={name}
                                    label={fieldLabels[name]}
                                    options={categoryOptions || []}
                                />
                            ) : (
                                <Field
                                    as={type === 'textarea' ? 'textarea' : 'input'}
                                    id={name}
                                    name={name}
                                    type="text"
                                    placeholder={fieldLabels[name]}
                                    rows={type === 'textarea' ? 4 : undefined}
                                    className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
                                />
                            )
                            }

                            <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                    ))}

                    <div className="sm:col-span-2 mt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full cursor-pointer bg-[#2C4B9B] hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition"
                        >
                            {isSubmitting ? 'Göndərilir...' : submitLabel}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default TrainingForm;
