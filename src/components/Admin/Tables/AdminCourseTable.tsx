import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { MdKeyboardArrowDown as KeyboardArrowDownIcon } from "react-icons/md";
import { MdKeyboardArrowUp as KeyboardArrowUpIcon } from "react-icons/md";
import EditIcon from '../../../assets/icons/adminEdit.svg'
import DeleteIcon from '../../../assets/icons/adminDelete.svg'
import LoadingSpinner from '../../General/LoadingSpinner';
import { useGetTrainingByIdQuery } from '../../../services/features/trainingPage/trainingsApi';
import DropDown from '../General/DropDown';

export interface Column {
    id: string;
    label: string;
    align?: 'left' | 'right' | 'center';
}

interface RowType {
    [key: string]: any;
}

interface AdminCourseTableProps {
    accordionThead: Column[]; // Acilan accordion ucun basliqlar
    columns: Column[];
    isCourse: boolean; // Kurs mu yoxsa quiz mi
    rows: RowType[];
    onEditClick: (training: RowType) => void;
    onDisabledQuestion: (questionId: number, quizId: number, isActive: boolean, refreshQuiz: () => void) => void;

}

interface RowProps {
    row: RowType;
    onDisabledQuestion: (questionId: number, quizId: number, isActive: boolean, refreshQuiz: () => void) => void;
    accordionThead: Column[];
    columns: Column[];
    isCourse: boolean;
    trainingId: number;
    onEditClick: (training: any) => void;
}


function Row(props: RowProps) {
    const { row, columns, trainingId, onEditClick, accordionThead, isCourse } = props;
    const [open, setOpen] = React.useState(false);

    /*  const { data: quizQuestions, isLoading, refetch: refreshQuiz } = useGetQuizByTrainingIdQuery(row.id, {
         skip: !open, // yalnız row (accordion) açıldıqda sorğu getsin
         refetchOnMountOrArgChange: true, // açıldıqda və ya id dəyişdikdə yenidən sorğu atsın
     }); */

    /*   const {data: trainings} = useGetTrainingByIdQuery(trainingId, {
          skip: !open, // yalnız row (accordion) açıldıqda sorğu getsin
          refetchOnMountOrArgChange: true, // açıldıqda və ya id dəyişdikdə yenidən sorğu atsın
      }) */

    /*   const { data: modules } = useGetModuleByTrainingIdQuery(trainingId, {
          skip: !open, // yalnız row (accordion) açıldıqda sorğu getsin
          refetchOnMountOrArgChange: true, // açıldıqda və ya id dəyişdikdə yenidən sorğu atsın
      }) */

    const { data: training, isLoading } = useGetTrainingByIdQuery(trainingId, {
        skip: !open // yalnız row açıldıqda sorğu getsin
    });
    console.log(training)

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {columns.map((column) => (
                    <TableCell sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                    }}
                        key={column.id}
                        align={column.align || 'left'}
                    >
                        {row[column.id]}
                    </TableCell>
                ))}
                <TableCell align="center">
                    <div className="flex items-center justify-center gap-3">
                        <button
                            onClick={onEditClick}
                            className="w-[40px] h-[40px] bg-[#44A15E] rounded-xl p-2.5 hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            <img
                                src={EditIcon}
                                alt="edit"
                                className="w-full h-full"
                            />
                        </button>
                        <button
                            className="w-[40px] h-[40px] bg-[#DA3D6866] rounded-xl p-2.5 hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            <img
                                src={DeleteIcon}
                                alt="delete"
                                className="w-full h-full"
                            />
                        </button>
                        {/* <button  // EDIT DEYIL CREATEDIR!!!
                            title='Sual əlavə et'
                            // onClick={onEditClick.bind(null, { ...row, isEdit: false, refreshQuiz: refreshQuiz })} // Burda sual yaradarkan quiz id lazim oldugu ucun row gonderib idsi ile find edilir
                            className="w-[40px] h-[40px] bg-[#44A15E] rounded-xl p-2.5 hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            <img
                                src={AddIcon}
                                alt="edit"
                                className="w-full h-full"
                            />
                        </button> */}
                    </div>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={columns.length + 2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }} className="overflow-y-scroll max-h-[300px]">
                            <Typography
                                sx={{
                                    fontFamily: '"Open Sans", sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                }}
                                variant="h6" gutterBottom component="div">
                                {isCourse ? 'Kurs Modulları' : 'Quiz Sualları'}
                            </Typography>
                            {isLoading ? (
                                <div className='flex items-center gap-x-2'><LoadingSpinner size={25} /> Yüklənir...</div>
                            ) : training?.modules?.length != 0 ? (
                                <Table size="small" aria-label="quiz-questions">
                                    <TableHead>
                                        <TableRow>
                                            {accordionThead.map((col) => (
                                                <TableCell
                                                    key={col.id}
                                                    align={col.align || 'left'}
                                                    sx={{
                                                        fontFamily: '"Open Sans", sans-serif',
                                                        fontWeight: 600,
                                                        fontSize: '16px',
                                                    }}
                                                >
                                                    {col.label}
                                                </TableCell>
                                            ))}
                                            <TableCell
                                                align="left"
                                                sx={{
                                                    fontFamily: '"Open Sans", sans-serif',
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                }}
                                            >
                                                Əməliyyatlar
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {// Kurs modullarını göstərir
                                            training?.modules?.map((q) => (
                                                <TableRow key={q.id}>
                                                    <TableCell   // Modulun başlığını göstərir məsələn: "Kursun Girişi"
                                                        sx={{
                                                            fontFamily: '"Open Sans", sans-serif',
                                                            fontWeight: 400,
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {q.title}
                                                    </TableCell>
                                                    <TableCell   // Modulun derslerini gosterir 
                                                        sx={{
                                                            fontFamily: '"Open Sans", sans-serif',
                                                            fontWeight: 400,
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {q.lessons?.map((lesson) => lesson.title).join(', ')}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <div className="flex items-center  gap-3">
                                                            <DropDown title='Edit' />
                                                            <DropDown title='Delete' />
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            ) : (
                                <Typography className='text-red-600'>Modul tapılmadı.</Typography>
                            )}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}


export default function AdminCourseTable({ columns, rows, onEditClick, onDisabledQuestion, accordionThead, isCourse }: AdminCourseTableProps) {
    return (
        <TableContainer component={Paper} className="mt-10 fade-in overflow-y-scroll max-h-[545px]">
            <Table aria-label="collapsible table !font-[Corbel]">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {columns.map((col) => (
                            <TableCell
                                sx={{
                                    fontFamily: '"Open Sans", sans-serif',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                                key={col.id} align={col.align || 'left'}>
                                {col.label}
                            </TableCell >
                        ))}
                        <TableCell
                            sx={{
                                fontFamily: '"Open Sans", sans-serif',
                                fontWeight: 600,
                                fontSize: '18px',
                            }}
                            align="center">Əməliyyatlar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <Row
                            key={index}
                            accordionThead={accordionThead} // Accordion başlıqları üçün columns istifadə olunur
                            row={row}
                            columns={columns}
                            isCourse={isCourse}
                            trainingId={row.id}
                            onEditClick={onEditClick}
                            onDisabledQuestion={onDisabledQuestion}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


