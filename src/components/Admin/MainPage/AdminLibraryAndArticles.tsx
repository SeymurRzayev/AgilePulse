import { useDeleteBookMutation, useGetAllBookQuery, useUpdateBookMutation } from "../../../services/features/mainPage/bookApi";
import { useDeleteArticleMutation, useGetAllArticleQuery, useUpdateArticleMutation } from "../../../services/features/mainPage/articleApi";
import TrainingsSearchContainer from "../../Trainings/TrainingsSearchContainer";
import { useState } from "react";
import type { ArticleRes, Book } from "../../../types/types";
import Swal from "sweetalert2";
import '../Admin.css';
import LoadingSpinner from "../../General/LoadingSpinner";
import { useLocation } from "react-router-dom";
import ListItem from "../ListItem";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import CustomModal from "../Modals/CustomModal";
import AddBookForm from "./AddBookForm";
import AddArticleForm from "./AddArticleForm";

const AdminLibraryAndArticles = () => {
  const location = useLocation();
  const isLibraryMode = location.pathname.includes('library');

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { data: allBookData, refetch: refreshBook, isLoading: isLoadingBooks } = useGetAllBookQuery();
  const { data: allArticleData, refetch: refreshArticle, isLoading: isLoadingArticle } = useGetAllArticleQuery();

  const [updateBook] = useUpdateBookMutation();
  const [updateArticle] = useUpdateArticleMutation();
  const [deleteBook] = useDeleteBookMutation();
  const [deleteArticle] = useDeleteArticleMutation();

  const books = allBookData?.data?.data || [];
  const articles = allArticleData?.data?.data || [];

  const editableFields = isLibraryMode
    ? ["name", "author"] as Array<keyof Book>
    : ["title", "content"] as Array<keyof ArticleRes>;

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

    try {
      if (isLibraryMode) {
        await updateBook({ bookId: id, formData }).unwrap();
        refreshBook();
      } else {
        await updateArticle({ id, data: formData }).unwrap();
        refreshArticle();
      }
    } catch {
      Swal.fire({ icon: 'error', title: 'Xəta', text: 'Yenilənmə uğursuz oldu!' });
    }
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
      if (isLibraryMode) {
        await updateBook({ bookId: id, formData }).unwrap();
        refreshBook();
      } else {
        await updateArticle({ id, data: formData }).unwrap();
        refreshArticle();
      }
      Swal.fire({ icon: "success", title: "Uğurla yükləndi!" });
    } catch {
      Swal.fire({ icon: "error", title: "Xəta", text: "Fayl yüklənmədi." });
    }
  };

  const handleItemDelete = async (id: number) => {
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
          await deleteBook(id).unwrap();
          refreshBook();
        } else {
          await deleteArticle(id).unwrap();
          refreshArticle();
        }
        Swal.fire('Silindi!', '', 'success');
      } catch {
        Swal.fire('Xəta!', 'Silinmə uğursuz oldu.', 'error');
      }
    }
  };

  return (
    <div className='w-full h-full'>
      {showModal && (
        <CustomModal
          onClose={() => setShowModal(false)}
          title={`Yeni ${isLibraryMode ? 'kitab' : 'məqalə'} əlavə et`}
        >
          {isLibraryMode ? (
            <AddBookForm onSuccess={() => { setShowModal(false); refreshBook(); }} />
          ) : (
            <AddArticleForm onSuccess={() => { setShowModal(false); refreshArticle(); }} />
          )}
        </CustomModal>
      )}

      <div className="w-full flex justify-between items-start">
        <div className="w-[669px] h-fit">
          <TrainingsSearchContainer
            searchValue={search}
            onSearchChange={setSearch}
            filterIcon={false}
            height={56}
          />
        </div>
      </div>

      <div className=''>
        <div className="w-full flex justify-between px-3">
          <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal'>
            {isLibraryMode ? "Kitabxana" : "Məqalələr"}
          </h2>
        </div>

        {(isLoadingBooks || isLoadingArticle)
          ? <LoadingSpinner className="mt-6" />
          : (
            <ul className="space-y-[19px] max-h-[545px] mt-5 overflow-y-scroll animated-list">
              {(isLibraryMode ? filteredBooks : filteredArticles).map(item => (
                <ListItem
                  key={item.id}
                  data={item}
                  editableFields={editableFields}
                  onFieldChange={handleFieldChange}
                  onFileUpload={handleFileUpload}
                  onDelete={handleItemDelete}
                  isLibraryMode={isLibraryMode}
                />
              ))}
            </ul>
          )
        }

        <div className="left-[50%] absolute bottom-0 mb-10 flex items-center justify-center">
          <AnimatedButton
            onClick={() => setShowModal(true)}
            className="!w-[250px] !h-[56px] !font-[Lexend]"
          >
            Yeni {isLibraryMode ? 'kitab' : 'məqalə'} yarat <span className="text-3xl ml-2 font-light">+</span>
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default AdminLibraryAndArticles;
