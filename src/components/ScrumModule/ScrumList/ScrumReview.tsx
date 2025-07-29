import React from "react";
import SadFace from "../../../assets/icons/sad-face.svg";
import regularFace from "../../../assets/icons/regular-face.svg";
import happyFace from "../../../assets/icons/happy-face.svg";
import smileFace from "../../../assets/icons/smile-face.svg";
import RatingFaceCard from "./RatingFaceCard";

interface ScrumReviewProps {
  reviewTitle?: string;
  reviewText?: string;
  reviewRating: number|null;
  reviewComment: string;
  commentText?: string;
  limit?: number;
  ScrumId: number|undefined;
  userId: number| undefined;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  setComment: (text: string)=> void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, ScrumId: number|undefined,userId: number| undefined) => void;
}

const ScrumReview: React.FC<ScrumReviewProps> = ({
  reviewTitle='Nə dərəcədə faydalı idi?',
  reviewText='Təlimin sizə verdiyi dəyəri və öyrəndiklərinizin faydalı olub olmadığını bizimlə bölüşün',
  commentText= 'Sənin rəyin bizim üçün dəyərlidir. Təlim haqqında fikir bildir',
  reviewRating,
  reviewComment,
  limit= 100,
  ScrumId,
  userId,
  setRating,
  setComment,
  handleSubmit
}) => {
  return (
    <div className="max-w-3xl w-full mx-auto h-[695px]  relative my-24 font-[Corbel] flex flex-col">
      <div className="bgCard bg-[#EAEDF5] rounded-3xl w-[92%] h-[95%]"></div>
      <div
        style={{ boxShadow: "0px 0px 40px 10px rgba(87, 87, 87, 0.12)" }}
        className="frontCard rounded-3xl w-[92%] h-[95%] absolute bottom-0 right-0 z-20 bg-white p-5 md:p-20 space-y-2"
      >
        <h2 className="font-bold text-2xl lg:text-5xl text-center">
           {reviewTitle}
        </h2>
        <p className="text-center text-base lg:text-[22px] font-normal text-[#00000099]">
         {reviewText}
        </p>
        <div className="feedBacks max-w-sm mx-auto flex gap-2 justify-between mt-4 mb-6 md:mt-8 md:mb-12 ">
          <RatingFaceCard icon={SadFace} title="Bad" activeRating={reviewRating === 1} clickAction={() => setRating(1)} />
          <RatingFaceCard icon={regularFace} title="Okay" activeRating={reviewRating === 2} clickAction={() => setRating(2)} />
          <RatingFaceCard icon={happyFace} title="Good" activeRating={reviewRating === 3} clickAction={() => setRating(3)} />
          <RatingFaceCard icon={smileFace} title="Amazing" activeRating={reviewRating === 4} clickAction={() => setRating(4)} />
        </div>
        <div className="textAreaContainer md:h-[250px] relative ">
          <p className=" text-lg lg:text-[24px] font-normal text-[#00000099]">
            {commentText}
          </p>
          <textarea
            className=" h-full sm:h-[250px] md:h-[170px] lg:h-[150px] resize-none block w-full border border-[#00000059] rounded-[10px] p-4 outline-none"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
            value={reviewComment}
            rows={4}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>, ScrumId,userId);
              }
            }}
          ></textarea>
          <span className="absolute bottom-2 md:bottom-8 left-2 text-[#00000059]">
            {reviewComment.length}/{limit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrumReview;
