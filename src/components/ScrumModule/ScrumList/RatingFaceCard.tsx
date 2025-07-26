import React from "react";

interface RatingFaceCardProps {
  icon: string;
  title: string;
  activeRating?: boolean;
  clickAction?: () => void;
}

const RatingFaceCard: React.FC<RatingFaceCardProps> = ({
  icon,
  title,
  activeRating = false,
  clickAction = () => {},
}) => {
  return (
    <div
      style={activeRating ? { boxShadow: "0px 0px 5px 0px rgba(44, 75, 155, 1);" } : undefined}
      onClick={clickAction}
      className={`w-[75px] mt-4 h-[80px] flex justify-center items-center border ${
        (activeRating && "border-[#BEC7E0]") || "border-[#00000026]"
      }  rounded-[10px] cursor-pointer ${
        activeRating && "shadow shadow-[#2C4B9B]"
      } `}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={icon} className="w-[40px] h-[40px]" alt="face" />
        <span className="text-[#00000099] text-center text-xs">{title}</span>
      </div>
    </div>
  );
};

export default RatingFaceCard;
