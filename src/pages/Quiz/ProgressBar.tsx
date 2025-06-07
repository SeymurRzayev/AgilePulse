import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

interface ProgressBarProps {
  progress: number;
  status:string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress,status }) => {
  return (
    <div className="flex flex-col items-start  w-full max-w-[790px] gap-1 relative z-10 top-[10%]">
      <h1 className="text-2xl sm:text-3xl text-white leading-9 font-bold flex flex-col items-start justify-center w-full max-w-[790px] gap-4 relative z-10">
     {status === "started" ? "  Quiz" : "Başlanılmayıb"}
      </h1>
      <Box
        sx={{
           width: "100vw", 
          maxWidth: "100%",
          border: "1px solid #BEC7E0",
          borderRadius: "10px",
          padding: "2px",
          backgroundColor: "transparent",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: "8px",
            backgroundColor: "transparent",
            "& .MuiLinearProgress-bar": {
              backgroundColor: progress === 0 ? "transparent" : "#BEC7E0",
              transition: "all 0.5s ease-in-out",
            },
          }}
        />
      </Box>
    </div>
  );
};

export default ProgressBar;
