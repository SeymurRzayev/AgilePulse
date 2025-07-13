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

    return (
        <React.Fragment>
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
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={columns.length + 1}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Quiz
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Suallar</TableCell>
                                        <TableCell>Duzgun cavablari</TableCell>
                                        <TableCell>Emaliyyatlar</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history?.map((historyRow: any) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell>{historyRow.date}</TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="center">
                                                <div className="flex gap-3">
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
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


export default function AdminCourseTable({ columns, rows }: AdminCourseTableProps) {
    return (
        <TableContainer component={Paper} className="mt-10">
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell /> {/* Collapse üçün boşluq */}
                        {columns.map((col) => (
                            <TableCell key={col.id} align={col.align || 'left'}>
                                {col.label}
                            </TableCell>
                        ))}
                        <TableCell align="center">Əməliyyatlar</TableCell> {/* Yeni sütun */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} columns={columns} />
                    ))}
                    {/* <EditIcon /> */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

