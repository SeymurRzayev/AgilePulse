
import React, { useState } from 'react';

interface ShowMoreTextProps {
    text: string;
    maxLength?: number;
    showLessText?: string;
    showMoreText?: string;
    className?: string;
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({
    text,
    maxLength = 150,
    showLessText = "Show Less",
    showMoreText = "Show More",
    className = ""
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const displayText = isExpanded ? text : `${text.slice(0, maxLength)}...`;

    return (
        <div className={className}>
            <p className="text-gray-800 leading-relaxed mb-2">
                {displayText}
                <span
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 cursor-pointer hover:text-blue-800 font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-1"
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? showLessText : showMoreText}
                </span>
            </p>
        </div>
    );
}

export default ShowMoreText;