import userImg from "../../assets/images/user.png";
import { useDeleteBookMutation, useGetAllBookQuery, useUpdateBookMutation } from "../../services/features/bookApi";
import TrainingsSearchContainer from "../Trainings/TrainingsSearchContainer";
import { useEffect, useState } from "react";
import type { ArticleRes, Book } from "../../types/types";
import Swal from "sweetalert2";
import './Admin.css'
import LoadingSpinner from "../General/LoadingSpinner";
import { useDeleteArticleMutation, useGetAllArticleQuery, useUpdateArticleMutation } from "../../services/features/articleApi";
import { useLocation, useNavigate } from "react-router-dom";
import ListItem from "./ListItem";
import MainButton from "../Butttons/MainButton";

const AdminLibraryAndArticles = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const isLibraryMode: boolean = location.pathname.includes('library')

  const [books, setBooks] = useState<Book[]>([]);
  const [articles, setArticles] = useState<ArticleRes[]>([]);
  const [search, setSearch] = useState<string>("");

  const { data: allBookData, refetch: refreshBook, isLoading: isLoadingBooks } = useGetAllBookQuery();
  const { data: allArticleData, refetch: refreshArticle, isLoading: isLoadingArticle } = useGetAllArticleQuery();
  const [updateBook] = useUpdateBookMutation();
  const [updateArticle] = useUpdateArticleMutation();
  const [deleteBook] = useDeleteBookMutation();
  const [deleteArticle] = useDeleteArticleMutation()

  const editableFields = isLibraryMode
    ? ["name", "author"] as Array<keyof Book>
    : ["title", "content"] as Array<keyof ArticleRes>;

  useEffect(() => {
    if (isLibraryMode && allBookData?.data?.data) {
      setBooks(allBookData.data.data);
    } else if (!isLibraryMode && allArticleData?.data?.data) {
      setArticles(allArticleData.data.data);
    }
  }, [allBookData, allArticleData, isLibraryMode]);

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase()) ||
    article.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleFieldChange = async (
    id: number,
    field: keyof Book | keyof ArticleRes,
    value: string | number
  ) => {
    const formData = new FormData();
    formData.append(field, value.toString());

    if (isLibraryMode) {
      const updatedBooks = books.map(b =>
        b.id === id ? { ...b, [field as keyof Book]: value } : b
      );
      setBooks(updatedBooks);

      await updateBook({ bookId: id, formData }).unwrap().catch(() =>
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Yenilənmə uğursuz oldu!' })
      );
    } else {
      const updatedArticles = articles.map(a =>
        a.id === id ? { ...a, [field as keyof ArticleRes]: value } : a
      );
      setArticles(updatedArticles);

      await updateArticle({ id, data: formData }).unwrap().catch(() =>
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Məqalə yenilənmədi!' })
      );
    }
  };


  /*   const handleFieldChange = (
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
    }; */


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
      if (isLibraryMode) {
        await updateBook({ bookId: id, formData }).unwrap();
        refreshBook();
      } else {
        await updateArticle({ id, data: formData }).unwrap();
        refreshArticle();
      }
      Swal.fire({ icon: "success", title: "Uğurla yükləndi!" });
    } catch (error) {
      Swal.fire({ icon: "error", title: "Xəta", text: "Fayl yüklənmədi." });
    }
  };


  /*   const handleFileUpload = async (
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
    }; */

  const handleFieldDelete = async (id: number) => {
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
        if (isLibraryMode) {
          await deleteBook(id);
          refreshBook()
          Swal.fire('Silindi!', 'Kitab silindi.', 'success');
        } else {
          await deleteArticle(id)
          refreshArticle()
          Swal.fire('Silindi!', 'Məqalə silindi.', 'success');
        }
      } catch {
        Swal.fire('Xəta!', 'Seçilmiş məhsul silinmədi.', 'error');
      }
    }
  };


  return (
    <div className=' w-full h-full '>

      <div className="w-full  flex justify-between items-start ">
        <div className="w-[669px] h-fit">
          <TrainingsSearchContainer
            searchValue={search}
            onSearchChange={setSearch}
            filterIcon={false} height={56}
          />
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
      <div className=' '>
        <div className="w-full flex justify-between px-3 ">
          <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal'>{isLibraryMode ? "Kitabxana" : "Məqalələr"}</h2>
          <MainButton text={isLibraryMode ? "+ Kitab " : "+ Məqalə"} onClick={() => navigate(`${isLibraryMode ? 'addBook' : 'addArticle'}`)} />
        </div>
        {
          isLoadingBooks || isLoadingArticle
            ? <LoadingSpinner className="mt-6" />
            : (
              <ul
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
                className="space-y-[19px] max-h-[750px] mt-5 overflow-y-scroll animated-list"
              >
                {
                  isLibraryMode
                    ? (
                      filteredBooks?.map(book => (
                        <ListItem
                          key={book.id}
                          data={book}
                          editableFields={editableFields}
                          onFieldChange={handleFieldChange}
                          onFileUpload={handleFileUpload}
                          onDelete={handleFieldDelete}
                          isLibraryMode={isLibraryMode}
                        />
                      ))
                    )
                    : (
                      filteredArticles?.map(article => (
                        <ListItem
                          key={article.id}
                          data={article}
                          editableFields={editableFields}
                          onFieldChange={handleFieldChange}
                          onFileUpload={handleFileUpload}
                          onDelete={handleFieldDelete}
                          isLibraryMode={isLibraryMode}
                        />
                      ))
                    )
                }

              </ul>
            )
        }
      </div>
    </div>
  )
}

export default AdminLibraryAndArticles




