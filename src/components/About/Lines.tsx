import lineteamsvg from "../../assets/images/lineteam.svg";
import arrowlinesvg from "../../assets/images/arrowlineteam.svg";
import longsideline from "../../assets/images/longsideline.svg";
import shortsideline from "../../assets/images/shortsideline.svg";
import shortlineteam from "../../assets/images/shortlineteam.svg";
import arrowline152 from "../../assets/images/arrowline152.svg";
import arrowteam273 from "../../assets/images/arrowteam273.svg";
import arrshortteam from "../../assets/images/arrshortteam.svg";

function Lines() {
  return (
    <>
      {/* up left line */}
      {/* <img
        className="absolute  hidden  lg:max-2xl:block lg:block  w-[30%]   top-[4%] left-[20%] "
        src={lineteamsvg}
        alt=""
      /> */}
      {/* up right line */}
      <div className="flex flex-row justify-center items-center gap-0 absolute left-[13%] right-[13%]  top-[4%]">
        <img
          className=" w-[calc(50%-4px)] hidden h-2   lg:block"
          src={lineteamsvg}
          alt="line"
        />

        <img
          className=" w-[calc(50%-4px)] rotate-180 h-2 hidden   lg:block"
          src={lineteamsvg}
          alt="line"
        />
      </div>

      <div className="absolute  flex flex-row justify-between items-center gap-0   top-[4%] translate-y-[4px] left-[13%] right-[13%] h-[calc(20%-20px)]">
        <img
          className="  hidden   lg:block h-full    "
          src={arrowlinesvg}
          alt="line"
        />
        <img
          className="  hidden   lg:block h-full    "
          src={arrowlinesvg}
          alt="line"
        />
      </div>

      {/* out left line */}
      {/* <img
        className="absolute  hidden   lg:block h-[19.4%]   top-[4%] left-[19.9%] "
        src={arrowlinesvg}
        alt="line"
      /> */}
      {/* inner up downward arrow */}
      <img
        className="absolute hidden   lg:block h-[3.6%] top-[4%] right-[50%] left-1/2 translate-y-[4px] translate-x-[-50%] "
        src={arrshortteam}
        alt="line"
      />
      {/* inner up line */}
      <div className="absolute flex flex-row justify-between items-center gap-2 top-[5.5%] translate-y-[4px] left-[32%] right-[32%]">
        <img
          className="  hidden   lg:block h-[2px]   w-[calc(50%-8px)]  object-cover   "
          src={lineteamsvg}
          alt="line"
        />
        <img
          className=" rotate-180  hidden   lg:block h-[2px]   w-[calc(50%-8px)] object-cover   "
          src={lineteamsvg}
          alt="line"
        />
      </div>


      {/* inner left line */}
      <img
        className="absolute  hidden   lg:block h-[20%] object-cover  top-[5.5%] left-[32%] translate-y-[5px] "
        src={shortsideline}
        alt="line"
      />
      {/* inner right line */}
      <img
        className="absolute  hidden   lg:block h-[42%]  top-[5.5%] right-[32%] translate-y-[4px]  "
        src={longsideline}
        alt="line"
      />
      {/* inner bottom line */}
      <img
        className="absolute  hidden   lg:block w-[18%] top-[25%] translate-y-[12px] left-[32%]  translate-x-1 "
        src={shortlineteam}
        alt="line"
      />
      {/* inner downward arrow */}
      <img
        className="absolute hidden   lg:block h-[5%] top-[24.9%] left-[50%] -translate-x-2 translate-y-[15px]  "
        src={arrowline152}
        alt="line"
      />

      
      {/* second bottom line */}
      <img
        className="absolute hidden   lg:block w-[19%]  top-[47.1%] right-[32%] rotate-180 "
        src={shortlineteam}
        alt="line"
      />
      {/* long downward line */}
      <img
        className="absolute hidden   lg:block h-[9.4%]  top-[47.09%] right-[50%] "
        src={arrowteam273}
        alt="line"
      />
      {/* small downward arrow */}
      <img
        className="absolute  hidden   lg:block h-[3.5%]  top-[56.6%] right-[50%] translate-x-[7px] "
        src={arrshortteam}
        alt="line"
      />
      {/* down left line and right line */}
       <div className="flex flex-row justify-center items-center gap-0 absolute left-[10%] right-[10%]  top-[58%]">
        <img
          className=" w-[calc(50%-4px)] hidden h-2   lg:block"
          src={lineteamsvg}
          alt="line"
        />

        <img
          className=" w-[calc(50%-4px)] rotate-180 h-2 hidden   lg:block"
          src={lineteamsvg}
          alt="line"
        />
      </div>


      <div className="absolute  flex flex-row justify-between items-center gap-0 top-[60%] -translate-y-[55px] left-[10%] right-[10%] h-[calc(5%+50px)]">
<img
        className="  hidden   lg:block h-full object-contain  "
        src={arrowline152}
        alt="line"
      />
      {/* down left downward line */}
      <img
        className="  hidden   lg:block h-full object-cover  "
        src={arrowline152}
        alt="line"
      />
      </div>
      {/* down right downward line */}
      
    </>
  );
}

export default Lines;
