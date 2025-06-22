import userImg from "../../assets/images/user.png";
import { useDeleteBookMutation, useGetAllBookQuery, useUpdateBookMutation } from "../../services/features/bookApi";
import TrainingsSearchContainer from "../Trainings/TrainingsSearchContainer";
import EditableInput from "../EditableInput";
import { useEffect, useRef, useState } from "react";
import type { Book } from "../../types/types";
import DelIcon from '../../assets/icons/delete_icon.svg'
import CamIcon from '../../assets/icons/camera_icon.svg'
import DowmloadIcon from '../../assets/icons/mynaui_download.svg'
import Swal from "sweetalert2";

const AdminLibraryAndArticles = () => {

  const [books, setBooks] = useState<Book[]>([])
  const { data, refetch: refreshBook } = useGetAllBookQuery()
  const [updateBook] = useUpdateBookMutation()
  const [deleteBook] = useDeleteBookMutation()

  const editableFields: Array<keyof Book> = ["name", "author"];
  const allBook = data?.data?.data

  useEffect(() => {
    if (allBook) {
      setBooks(allBook);
    }
  }, [allBook]);

  const pdfInp = useRef<HTMLInputElement>(null);
  const imgInp = useRef<HTMLInputElement>(null);

  const handleFieldChange = (
    id: number,
    field: keyof Book,
    value: string | number
  ) => {
    const book = books.find(book => book.id === id);
    if (!book) return;

    const updatedBooks = books.map(b =>
      b.id === id ? { ...b, [field]: value } : b
    );
    setBooks(updatedBooks);

    const formData = new FormData();
    formData.append(field, value.toString());

    updateBook({ bookId: id, formData }).unwrap().catch(() =>
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Yenilənmə uğursuz oldu!' })
    );
  };


  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    field: "image" | "pdfFile"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append(field, file);

    try {
      await updateBook({ bookId: id, formData }).unwrap();
      refreshBook()
      Swal.fire({ icon: "success", title: "Uğurla yükləndi!" });
    } catch (error) {
      Swal.fire({ icon: "error", title: "Xəta", text: "Fayl yüklənmədi." });
    }
  };

  const handleDeleteBook = async (bookId: number) => {
    const result = await Swal.fire({
      title: 'Silmək istəyirsən?',
      text: "Bu əməliyyat geri qaytarıla bilməz!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DA3D68',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Bəli, sil',
      cancelButtonText: 'Ləğv et',
    });

    if (result.isConfirmed) {
      try {
        await deleteBook(bookId);
        refreshBook()
        Swal.fire('Silindi!', 'Kitab silindi.', 'success');
      } catch {
        Swal.fire('Xəta!', 'Kitab silinmədi.', 'error');
      }
    }
  };


  if (!allBook) return null

  return (
    <div className=' w-full h-full '>

      <div className="w-full  flex justify-between items-start ">
        <div className="w-[669px] h-fit">
          <TrainingsSearchContainer filterIcon={false} height={56} />
        </div>
        <div className="flex gap-3 items-center">
          {/* Name */}
          <div className="">
            {/* Must be dynamic */}
            <span className="block text-[#000000DE] text-sm font-bold font-[Corbel]">Seymur Rzayev</span>
            <span className=" text-[#000000DE] text-[12px] font-normal font-[Corbel]">Boss admin</span>
          </div>
          {/* Img */}
          <div className="w-[46px] h-[46px]">
            <img src={userImg} alt="" />
          </div>
        </div>
      </div>
      <div className=' mt-[43px]'>
        <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal'>Tapşırıqlar</h2>
        <ul className="space-y-[19px]">
          {
            books?.map(book => (
              <li
                className="w-full flex justify-between items-center py-2 pr-5 pl-2 bg-[#EAEDF5] rounded-[30px]"
                key={book.id}
              >
                <div className="flex items-center max-w-[388px] gap-x-10">
                  <div className=" w-[106px] h-[143px] p-2.5 ">
                    <img
                      style={{
                        boxShadow: "0px 0px 4.9px 1.89px #0000003B",
                      }}
                      src={book.imageUrl} alt={book.name}
                      className="w-[86px] h-[123px] rounded-[3.77px]"
                    />
                  </div>
                  <div >
                    {
                      editableFields.map((field) => (
                        <EditableInput
                          key={field}
                          value={book[field] as string}
                          onChange={(val) => handleFieldChange(book.id, field, val)}
                        />
                      ))
                    }
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <input
                    type="file"
                    ref={pdfInp}
                    hidden
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e, book.id, "pdfFile")}
                  />
                  <input
                    type="file"
                    ref={imgInp}
                    hidden
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, book.id, "image")}
                  />
                  <span onClick={() => { pdfInp.current?.click() }} className="bg-[#E99826] cursor-pointer w-[60px] h-[48px] flex items-center justify-center rounded-[30px] p-2.5"><img src={DowmloadIcon} /></span>
                  <span onClick={() => { imgInp.current?.click() }} className="bg-[#44A15E] cursor-pointer w-[60px] h-[48px] flex items-center justify-center rounded-[30px] p-2.5"><img src={CamIcon} /></span>
                  <span onClick={() => handleDeleteBook(book.id)} className="bg-[#DA3D68] cursor-pointer w-[60px] h-[48px] flex items-center justify-center rounded-[30px] p-2.5"><img src={DelIcon} /></span>
                </div>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  )
}

export default AdminLibraryAndArticles




