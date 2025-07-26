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
    onEditClick: (training: RowType, module: any, clickInfo: any) => void;
    onDeleteCourse: (refreshCourse: () => void, clickInfo: { id: number, type: 'course' | 'module' | 'lesson' }) => void;

}

interface RowProps {
    row: RowType;
    onDeleteCourse: (refreshCourse: () => void, clickInfo: { id: number, type: 'course' | 'module' | 'lesson' }) => void;
    accordionThead: Column[];
    columns: Column[];
    isCourse: boolean;
    trainingId: number;
    onEditClick: (training: any, module: any, clickInfo: any) => void;
}


function Row(props: RowProps) {
    const { row, columns, trainingId, onEditClick, accordionThead, onDeleteCourse } = props;
    const [open, setOpen] = React.useState(false);

    const { data: training, isLoading, refetch: refreshTraining } = useGetTrainingByIdQuery(trainingId, {
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
                        <DropDown
                            title="Edit"
                            list={[
                                'Kursu redakte et',
                                'Modul əlavə et'
                            ]}
                            className="bg-[#44A15E] hover:bg-[#38894F] active:bg-[#2F7342]"
                            onSelect={(value) => {
                                onEditClick(row,
                                    value === 'Modul əlavə et' ? { trainingId: row.id, refreshTraining: refreshTraining } : [],
                                    {
                                        type: value, mode: value === 'Modul əlavə et' ? 'create' : 'edit'

                                    })
                            }}
                        />
                        <button  /* DELETE */
                            onClick={() => onDeleteCourse(refreshTraining, { id: row.id, type: 'course' })}
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
                            <Typography
                                sx={{
                                    fontFamily: '"Open Sans", sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                }}
                                variant="h6" gutterBottom component="div">
                                Kurs Modulları və dərsləri
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
                                                align="center"
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
                                                        {q.lessons?.map((lesson) => <div>{lesson.orderNumber} {lesson.title}</div>)}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <div className="flex items-center  gap-3">
                                                            <DropDown
                                                                title="İdarə et"
                                                                list={[
                                                                    'Modulu redakte et',
                                                                    q.lessons?.length > 0 ? 'Dərsi redakte et' : null,
                                                                    'Dərs əlavə et'
                                                                ].filter(Boolean) as string[]}
                                                                className="bg-[#44A15E] hover:bg-[#38894F] active:bg-[#2F7342]"
                                                                onSelect={(value) => {
                                                                    onEditClick([], value === 'Dərsi redakte et' ? { ...q, refreshTraining: refreshTraining } : { ...q, trainingId: row.id, refreshTraining: refreshTraining }, {
                                                                        type: value,
                                                                        mode: value === 'Dərs əlavə et' ? 'create' : 'edit'
                                                                    })
                                                                }}
                                                            />
                                                            <DropDown
                                                                list={[
                                                                    'Modulu sil',
                                                                    q.lessons?.length > 0 ? 'Dersi sil' : null,
                                                                ].filter(Boolean) as string[]}
                                                                title="Delete"
                                                                className="bg-[#DA3D68] hover:bg-[#B83256] active:bg-[#A52C4B]"
                                                                onSelect={(value) => {
                                                                    onDeleteCourse(refreshTraining, { id: q.id, type: value  === 'Modulu sil' ? 'module' : 'lesson' })
                                                                }}
                                                            />
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


export default function AdminCourseTable({ columns, rows, onEditClick, onDeleteCourse, accordionThead, isCourse }: AdminCourseTableProps) {
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
                            onDeleteCourse={onDeleteCourse}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


