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

export interface Column {
    id: string;
    label: string;
    align?: 'left' | 'right' | 'center';
}

interface RowType {
    [key: string]: any;
}

interface AdminCourseTableProps {
    columns: Column[];
    rows: RowType[];
}

function Row(props: { row: RowType; columns: Column[] }) {
    const { row, columns } = props;
    const [open, setOpen] = React.useState(false);
    const { data: quizQuestions, isLoading } = useGetQuizByTrainingIdQuery(row.id, {
        skip: !open // yalnız row açıldıqda sorğu getsin
    });

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
                    <TableCell key={column.id} align={column.align || 'left'}>
                        {row[column.id]}
                    </TableCell>
                ))}
                <TableCell align="center">
                    <div className="flex items-center justify-center gap-3">
                        <button
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
                    </div>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={columns.length + 2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }} className="overflow-y-scroll max-h-[300px]">
                            <Typography variant="h6" gutterBottom component="div">
                                Sual siyahısı
                            </Typography>
                            {isLoading ? (
                                <Typography className='flex items-center gap-x-2'><LoadingSpinner size={25} /> Yüklənir...</Typography>
                            ) : quizQuestions ? (
                                <Table size="small" aria-label="quiz-questions">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Sual</TableCell>
                                            <TableCell>Düzgün Cavab</TableCell>
                                            <TableCell>Əməliyyatlar</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {quizQuestions?.map((q) => (
                                            <TableRow key={q.id}>
                                                <TableCell>{q.content}</TableCell>
                                                <TableCell>{q.answers.map(answer => answer.isCorrect ? answer.content : '')}</TableCell>
                                                <TableCell align="center">
                                                    <div className="flex items-center  gap-3">
                                                        <button
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
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
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


export default function AdminCourseTable({ columns, rows }: AdminCourseTableProps) {
    return (
        <TableContainer component={Paper} className="mt-10 fade-in overflow-y-scroll max-h-[545px]">
            <Table aria-label="collapsible table !font-[Corbel]">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {columns.map((col) => (
                            <TableCell key={col.id} align={col.align || 'left'}>
                                {col.label}
                            </TableCell>
                        ))}
                        <TableCell align="center">Əməliyyatlar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <Row key={index} row={row} columns={columns} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
