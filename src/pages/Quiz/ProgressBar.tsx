import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <Box
      sx={{
        width: '100%',
        border: '1px solid #BEC7E0',
        borderRadius: '10px',
        padding: '2px',
        backgroundColor: 'transparent',
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: '8px',
          backgroundColor: 'transparent',
          '& .MuiLinearProgress-bar': {
            backgroundColor: progress === 0 ? 'transparent' : '#BEC7E0',
            transition: 'all 0.5s ease-in-out',
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
