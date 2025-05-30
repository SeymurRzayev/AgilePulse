import type { FC } from "react";
type Props = {
  name: string;
  occupation: string;
  jobDescription: string;
  img: any;
};
const TeamInfoCard: FC<Props> = ({ name, occupation, jobDescription, img }) => {
  return (
    <div>
      <div className="absolute flex flex-col gap-3 justify-end bottom-2 left-1 right-1 teamListItem w-[323px] mx-auto mt-auto h-[233px] bg-white rounded-[10px] rounded-tl-[100px] rounded-tr-[100px] shadow-lg">
        <div className="p-7 mt-auto">
          <h5 className="text-[#000000DE] font-bold leading-[16px] text-[16px]">
            {name}
          </h5>
          <span className="text-[#566FAF] font-bold leading-[16px] text-[12px]">
            {occupation}
          </span>
          <p className="text-base text-[#00000099] font-bold">
            {jobDescription}
          </p>
        </div>
      </div>
      <img
        src={img}
        className="w-[200px] h-[200px] mx-auto rounded-full object-cover absolute top-2 rounded-bl-[10px] translate-x-[-50%] left-1/2"
        alt={name}
      />
    </div>
  );
};

export default TeamInfoCard;
