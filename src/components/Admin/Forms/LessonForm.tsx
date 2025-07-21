

interface LessonFormProps {
    isEdit: boolean;
    initialData: any;
    onSuccess: () => void;
}


const LessonForm = ({ initialData }: LessonFormProps) => {

    console.log(initialData, 'LessonForminitialData')

    return (
        <div>LessonForm</div>
    )
}

export default LessonForm