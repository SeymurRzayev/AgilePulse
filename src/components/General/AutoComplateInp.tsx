import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useField, useFormikContext } from 'formik';

interface AutoComplateInpProps {
    name: string;
    label: string;
    options: { id: number; name: string }[];
}

export default function AutoComplateInp({ name, label, options }: AutoComplateInpProps) {
    const { setFieldValue, values } = useFormikContext<any>();
    const [_field, meta] = useField(name);

    // const selectedOption = options.find((option) => option.id === values[name]) || null;
    const selectedOption = options.find((option) => option.id === Number(values[name])) || null;

    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option.name}
            value={selectedOption}
            // className='mt-4 '
            className='mt-4'
            onChange={(_event, newValue) => {
                setFieldValue(name, newValue ? newValue.id : '');
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                        borderColor: '#ccc',
                    },
                    '&:hover fieldset': {
                        border: 'none'
                    },
                    '&.Mui-focused fieldset': {
                        border: 'solid',
                        borderWidth: '2px',
                        borderColor: '#2C4B9B',
                    },
                },
                '& .MuiInputBase-input': {
                    outline: 'none',
                    padding: '10px 14px',
                },
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    error={Boolean(meta.touched && meta.error)}
                    helperText={meta.touched && meta.error}
                />
            )}
            fullWidth
        />
    );
}
