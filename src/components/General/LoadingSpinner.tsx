import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface ILoadingSpinner {
    className?: string
    size?: number
}

export default function LoadingSpinner({ className , size }: ILoadingSpinner) {
    return (
        <Box sx={{ display: 'flex' }} className={className} >
            <CircularProgress size={size} />
        </Box>
    );
}