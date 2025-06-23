import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface ILoadingSpinner {
    className?: string
}

export default function LoadingSpinner({ className }: ILoadingSpinner) {
    return (
        <Box sx={{ display: 'flex' }} className={className}>
            <CircularProgress />
        </Box>
    );
}