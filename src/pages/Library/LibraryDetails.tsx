import Navbar from "../../layout/Navbar/Navbar";
import bookImg from "../../assets/images/libdel1.png";

const LibraryDetails = () => {
  return (
    <>
      <div className="relative mb-[50px] h-28 w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div className="">
        <div className="bookSection md:h-[450px] xl:h-[610px] p-5 bg-[#2C4B9B] w-full my-2 md:my-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28">
          <div className="relative">
            <img
              src={bookImg}
              className="w-full md:w-[350px] md:h-[530px] xl:h-[690px] xl:w-[521px] absolute h-[400px] -top-[61px] left-14"
              alt="image"
            />
          </div>
          <div className=" md:my-3 xl:my-6 flex flex-col md:gap-5 xl:gap-10 max-w-[515px]">
            <div className="hederCnt flex flex-col">
              <h2 className="font-bold text-center md:text-3xl xl:text-[46px] text-white">
                The Age of Agile
              </h2>
              <p className="font-normal text-center md:text-2xl xl:text-[34px] text-[#FFFFFF99]">
                Stephen Denning
              </p>
            </div>

            <div className="midCnt flex flex-col md:gap-3 xl:gap-6">
              <p className="text-white text-center md:text-2xl xl:text-[30px] max-w-[512px] mx-auto">
                Ənənəvi idarəetmədən çevik (agile) yanaşmaya keçid – uğurlu
                şirkətlərin gələcəyidir.
              </p>

              <div className="list flex flex-col gap-4 text-white md:text-xl xl:text-2xl">
                <p>3 əsas prinsip:</p>

                <ol style={{ listStyleType: "decimal" }} className="list-item">
                  <li>
                    Müştəri fokusluluğu – hər şey müştəriyə dəyər yaratmaq üçün.
                  </li>
                  <li>
                    Kiçik, özünüidarə edən komandalar – sürətli qərar və yüksək
                    məhsuldarlıq
                  </li>
                  <li>
                    Şəbəkə əsaslı idarəetmə – sərt iyerarxiya yerinə çevik
                    əməkdaşlıq.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottomSection w-full md:px-10 xl:px-14 py-6 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-14 xl:gap-28">
        <div className="max-w-[519px]"></div>

        <div className="txtContainer ml-auto w-full">
          <div className="list flex flex-col gap-4 md:text-lg lg:text-xl  bg-white shadow-md border-0 rounded-[30px] px-8 py-12 ">
            <ol style={{ listStyleType: "decimal" }}>
              <li>
                Ənənəvi idarəetmədən çevik idarəetməyə keçid Müəllif göstərir
                ki, sabit və plan əsasında idarə olunan şirkətlər artıq müasir
                rəqabətə davam gətirə bilmir. Onların yerini çevik, müştəriyə
                fokuslanan və tez reaksiya verən komandalar tutur.
              </li>
              <li>
                {" "}
                Üç əsas prinsip:
                <ul style={{ listStyleType: "disc" }} className="w-4/5">
                  <li>
                    Müştəri fokusluluğu: Bütün qərarlar və fəaliyyətlər
                    müştəriyə dəyər yaratmağa yönəlməlidir.
                  </li>
                  <li>
                    Kiçik, özünüidarə edən komandalar: Əməkdaşlıq edən və qərar
                    vermə səlahiyyətinə sahib komandalar daha məhsuldar olur.
                  </li>
                  <li>
                    Şəbəkə əsaslı idarəetmə: Yuxarıdan-aşağı sərt strukturların
                    əvəzinə çevik və əlaqəli komandalar şəbəkəsi daha effektiv
                    işləyir.
                  </li>
                </ul>
              </li>
              <li>
                Daimi öyrənmə və dəyişiklik Şirkətlər bazar dəyişikliklərinə
                uyğunlaşmaq üçün daimi eksperiment aparmalı və öyrənməyə açıq
                olmalıdır.
              </li>
              <li>
                {" "}
                Uğurlu nümunələr Kitabda Microsoft, Amazon və Spotify kimi
                şirkətlərin çevik yanaşmanı necə tətbiq edib böyümələrini
                sürətləndirdiyi təhlil olunur.
              </li>
            </ol>
          </div>
          <p className=" text-xl text-center mt-7">15-325</p>
        </div>
      </div>
    </>
  );
};

export default LibraryDetails;
