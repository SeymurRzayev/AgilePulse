import React from "react";
import quoteImg from "../../../assets/images/quote.png";

const StatusSection: React.FC = () => {
  return (
    <section
      id="status"
      style={{
        background:
          "linear-gradient(263.45deg, #E7912B 7.26%, #D83D69 49.31%, #2C4B9B 90.56%)",
      }}
      className="h-28 md:min-h-[369px] flex justify-center items-center"
    >
      <div className="txtCnt max-w-[927px] w-4/5 md:w-3/4 font-bold mx-auto flex flex-col justify-center relative gap-0 md:gap-2 text-white ">
        <img
          src={quoteImg}
          alt=""
          className="w-16 h-16  md:w-auto md:h-auto  absolute bottom-0 left-0 md:bottom-[20px] md:left-[-70px]"
        />
        <h2 className="text-lg md:text-4xl lg:text-5xl z-10 ">
          Agile öyrənmək yox, düşünmə tərzidir.
        </h2>
        <p className="md:text-2xl text-base text-end opacity-60">
          Alistair Cockburn
        </p>
      </div>
    </section>
  );
};

export default StatusSection;
