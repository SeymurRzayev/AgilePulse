import Navbar from "../../layout/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../services/features/mainPage/bookApi";
import type { BookByidData } from "../../types/types";
import FlipBook from "./FlipBook";

const LibraryDetails = () => {
  const params = useParams();

  const { data: bookRes } = useGetBookByIdQuery(Number(params.id));

  const book: BookByidData | undefined = bookRes?.data;


  return (
    <>
      <div className="relative mb-[50px] h-28 w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div className="">
        <div
          className="bookSection h-auto md:h-[450px] xl:h-[610px] p-5 bg-[#2C4B9B] w-full my-2 md:my-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28"
          style={{
            background:
              "linear-gradient(to left, rgba(78, 97, 236, 1), rgba(98, 29, 172, 1), rgba(64, 23, 149, 1))",
          }}
        >
          <div className="relative flex justify-center md:block">
            <img
              src={book?.imageUrl}
              className="w-[280px] h-[350px] md:w-[350px] md:h-[530px] xl:h-[690px] xl:w-[521px] static md:absolute md:-top-[61px] md:left-14 object-cover"
              alt="image"
            />
          </div>
          <div className="md:my-3 xl:my-6 flex flex-col gap-6 md:gap-5 xl:gap-10 max-w-[515px]">
            <div className="hederCnt flex flex-col gap-2">
              <h2 className="font-bold text-center text-2xl md:text-3xl xl:text-[46px] text-white">
                {book?.name}
              </h2>
              <p className="font-normal text-center text-lg md:text-2xl xl:text-[34px] text-[#FFFFFF99]">
                {book?.author}
              </p>
            </div>

            <div className="midCnt flex flex-col gap-4 md:gap-3 xl:gap-6">
              <p className="text-white text-center text-lg md:text-2xl xl:text-[30px] max-w-[512px] mx-auto px-2">
                {book?.description}
              </p>

              {/* <div className="list flex flex-col gap-4 text-white text-base md:text-xl xl:text-2xl px-2">
                <p>3 əsas prinsip:</p>

                <ol style={{ listStyleType: "decimal" }} className=" pl-4">
                  <li className="mb-2">
                    Müştəri fokusluluğu – hər şey müştəriyə dəyər yaratmaq üçün.
                  </li>
                  <li className="mb-2">
                    Kiçik, özünüidarə edən komandalar – sürətli qərar və yüksək
                    məhsuldarlıq
                  </li>
                  <li className="mb-2">
                    Şəbəkə əsaslı idarəetmə – sərt iyerarxiya yerinə çevik
                    əməkdaşlıq.
                  </li>
                </ol>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bottomSection w-full px-2 py-6 md:py-16 grid grid-cols-1 ">
        <div className="w-full  leftPage">
          {/* PDF Viewer */}
          {book?.pdfUrl && (
            <FlipBook pdfUrl={book?.pdfUrl} />
          )}
        </div>

        {/* <div className="txtContainer ml-auto w-full rightPage">
          
          <div className="list flex flex-col gap-4 text-sm md:text-lg lg:text-xl bg-white shadow-md border-0 rounded-[30px] px-4 md:px-8 py-8 md:py-12">
         
          </div>
          <p className="text-lg md:text-xl text-center mt-7">15-325</p>
        </div> */}
      </div>
    </>
  );
};

export default LibraryDetails;
