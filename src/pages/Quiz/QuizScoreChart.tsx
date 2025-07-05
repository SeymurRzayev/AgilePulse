import type { FC } from 'react';

interface QuizScoreChartProps {
    score: number;
    totalQuestions: number;
    isTimeOut:boolean;
}

const QuizScoreChart: FC<QuizScoreChartProps> = ({ score, totalQuestions }) => {
    let percentage = 0;
    if (totalQuestions > 0) {
        percentage = Math.round((score / totalQuestions) * 100);
    }
    const isPassed = percentage >= 75;

    const color =isPassed ? '#44DA5F' : '#EF3739';

    return (
        <div className="w-full max-w-[300px] h-[280px] md:max-w-[400px] md:max-h-[350px] flex flex-col items-center justify-center bg-transparent">
            <div className="relative w-full h-full flex items-center justify-center">
                <div 
                    className="w-50 h-50 md:w-60 md:h-60 rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                        background: `conic-gradient(${color} ${percentage * 3.6}deg, transparent ${percentage * 3.6}deg)`
                    }}
                >
                    <span className="text-4xl md:text-5xl font-bold text-black z-10">
                        {percentage}%
                    </span>
                </div>
            </div>
        
        </div>
    );
};

export default QuizScoreChart;
