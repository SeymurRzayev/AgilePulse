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
import { useGetQuizByTrainingIdQuery } from '../../../services/features/trainingPage/quizApi';
import LoadingSpinner from '../../General/LoadingSpinner';
import type { Answers } from '../../../types/types';
// import AddIcon from '../../../assets/icons/add.svg'

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
    questionCount: number;
}


function Row(props: RowProps) {
    const { row, columns, onEditClick, accordionThead, onDisabledQuestion, questionCount } = props;
    const [open, setOpen] = React.useState(false);

    const { data: quizQuestions, isLoading, refetch: refreshQuiz } = useGetQuizByTrainingIdQuery(row.id, {
        skip: !open, // yalnız row (accordion) açıldıqda sorğu getsin
        refetchOnMountOrArgChange: true, // açıldıqda və ya id dəyişdikdə yenidən sorğu atsın
    });

    /* const { data: training } = useGetTrainingByIdQuery(trainingId, {
        skip: !open // yalnız row açıldıqda sorğu getsin
    }); */

    function getCorrectAnswerKey(answers: Answers[]): string {
        const index = answers.findIndex((a) => a.isCorrect);
        return `answers${index + 1}`; // index 0 → answers1, və s.
    }

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
                        <button  // EDIT DEYIL CREATEDIR!!!
                            onClick={onEditClick.bind(null, { ...row, isEdit: false, refreshQuiz: refreshQuiz, isCreateQuiz: questionCount === 0 })} // Burda sual yaradarkan quiz id lazim oldugu ucun row gonderib idsi ile find edilir
                            className="w-[100px]  h-[40px] flex items-center justify-center bg-[#401795] rounded-xl  hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            <span className='text-xs text-white'>{questionCount === 0 ? 'Quiz yarat' : 'Sual əlavə et'}</span>
                            {/*  <img
                                src={AddIcon}
                                alt="edit"
                                className="w-[30px] h-[30px]"
                            /> */}
                        </button>
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
                                Quiz Sualları
                            </Typography>
                            {isLoading ? (
                                <div className='flex items-center gap-x-2'><LoadingSpinner size={25} /> Yüklənir...</div>
                            ) : quizQuestions ? (
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
                                        {// Quiz suallarını göstərir
                                            quizQuestions?.questions.map((q) => (
                                                <TableRow key={q.id}>
                                                    <TableCell   // Sualın mətnini göstərir yeni sual nedir Azərbaycanın ümummilli lideri kimdir?
                                                        sx={{
                                                            fontFamily: '"Open Sans", sans-serif',
                                                            fontWeight: 400,
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {q.content}
                                                    </TableCell>
                                                    <TableCell  // Düzgün cavabı göstərir məsələn: Azərbaycanın ümummilli lideri Heydər Əliyevdir
                                                        sx={{
                                                            fontFamily: '"Open Sans", sans-serif',
                                                            fontWeight: 400,
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {q.answers.map((answer) => answer.isCorrect ? answer.content : '')}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <div className="flex items-center  gap-3">
                                                            <button
                                                                onClick={() =>
                                                                    onEditClick({
                                                                        ...row,
                                                                        refreshQuiz: refreshQuiz,
                                                                        isEdit: true,
                                                                        quesId: q.id,
                                                                        content: q.content,
                                                                        answers1: q.answers[0]?.content || '',
                                                                        answers2: q.answers[1]?.content || '',
                                                                        answers3: q.answers[2]?.content || '',
                                                                        answers4: q.answers[3]?.content || '',
                                                                        answers5: q.answers[4]?.content || '',
                                                                        correctAnswer: getCorrectAnswerKey(q.answers),
                                                                    })
                                                                }
                                                                className="w-[40px] h-[40px] bg-[#44A15E] rounded-xl p-2.5 hover:opacity-90 transition-opacity cursor-pointer"
                                                            >
                                                                <img
                                                                    src={EditIcon}
                                                                    alt="edit"
                                                                    className="w-full h-full"
                                                                />
                                                            </button>
                                                            <button
                                                                onClick={() => onDisabledQuestion(q.id!, quizQuestions.id!, false, refreshQuiz)}
                                                                className="w-[40px] h-[40px] bg-[#DA3D6866] rounded-xl p-2.5 hover:opacity-90 transition-opacity cursor-pointer"
                                                            >
                                                                <img
                                                                    src={DeleteIcon}
                                                                    alt="delete"
                                                                    className="w-full h-full"
                                                                />
                                                            </button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            ) : (
                                <Typography className='text-red-600'>Sual tapılmadı.</Typography>
                            )}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}


export default function AdminQuizTable({ columns, rows, onEditClick, onDisabledQuestion, accordionThead, isCourse }: AdminCourseTableProps) {
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
                            questionCount={row.questionCount}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}