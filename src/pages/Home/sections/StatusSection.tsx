import React from "react";
import quoteImg from "../../../assets/images/quote.png";
import { useGetRandomQuotesQuery } from "../../../services/features/mainPage/quotesApi";

const StatusSection: React.FC = () => {

  const { data: quote } = useGetRandomQuotesQuery()

  if (!quote) return null;

  return (
    <section
      id="status"
      style={{
        background:
          "linear-gradient(263.45deg, #E7912B 7.26%, #D83D69 49.31%, #2C4B9B 90.56%)",
      }}
      className="font-[Corbel] h-28 md:min-h-[369px] flex justify-center items-center"
    >
      <div className="txtCnt max-w-[927px] px-0 md:px-5 w-4/5 md:w-3/4 font-bold mx-auto flex flex-col justify-center relative gap-0 md:gap-2 text-white ">
        <img
          src={quoteImg}
          alt=""
          className="w-16 h-14  md:w-auto md:h-auto  absolute bottom-6 -left-6 md:bottom-[20px] md:left-[-70px]"
        />
        <h2 className="text-lg md:text-3xl lg:text-5xl z-10 mt-6 ">
          {quote?.text}
        </h2>
        <p className="md:text-xl lg:text-2xl text-xs text-end opacity-60">
          {quote?.author}
        </p>
      </div>
    </section>
  );
};

export default StatusSection;
