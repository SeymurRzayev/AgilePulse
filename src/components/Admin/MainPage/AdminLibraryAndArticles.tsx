import { useDeleteBookMutation, useGetAllBookQuery } from "../../../services/features/mainPage/bookApi";
import { useDeleteArticleMutation, useGetAllArticleQuery } from "../../../services/features/mainPage/articleApi";
import TrainingsSearchContainer from "../../Trainings/TrainingsSearchContainer";
import { useState } from "react";
import type { ArticleRes, Book } from "../../../types/types";
import Swal from "sweetalert2";
import '../Admin.css';
import LoadingSpinner from "../../General/LoadingSpinner";
import { useLocation } from "react-router-dom";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import CustomModal from "../Modals/CustomModal";
import AddBookForm from "./AddBookForm";
import AddArticleForm from "./AddArticleForm";
import AdminTable from "../General/AdminTable";

const AdminLibraryAndArticles = () => {
  const location = useLocation();
  const isLibraryMode = location.pathname.includes('library');

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Book | ArticleRes | null>(null);

  const { data: allBookData, refetch: refreshBook, isLoading: isLoadingBooks } = useGetAllBookQuery();
  const { data: allArticleData, refetch: refreshArticle, isLoading: isLoadingArticle } = useGetAllArticleQuery();

  const [deleteBook] = useDeleteBookMutation();
  const [deleteArticle] = useDeleteArticleMutation();

  const books = allBookData?.data?.data || [];
  const articles = allArticleData?.data?.data || [];

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase()) ||
    article.author.toLowerCase().includes(search.toLowerCase())
  );

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
          title={`${isLibraryMode ? 'Kitab' : 'Məqalə'} ${selectedItem?.id ? 'üzərində dəyişiklik et' : 'əlavə et'}`}

        >
          {isLibraryMode ? (
            <AddBookForm initialData={selectedItem as Book} onSuccess={() => { setShowModal(false); refreshBook(); }} />
          ) : (
            <AddArticleForm initialData={selectedItem as ArticleRes} onSuccess={() => { setShowModal(false); refreshArticle(); }} />
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
            <AdminTable
              theads={[`${isLibraryMode ? 'Kitabın adı' : 'Məqalənin adı'}`, `${isLibraryMode ? 'Yazıçı' : 'Məqalənin yazarı'}`, `${isLibraryMode ? 'Dil' : 'Məzmunu'}`]}
              allowActions={true}
              rows={(isLibraryMode ? filteredBooks : filteredArticles).map((data) => ({
                id: data.id,
                cells: [
                  {
                    text: isLibraryMode
                      ? (data as Book).name
                      : (data as ArticleRes).title,
                    image: data.imageUrl,
                    imageShape: "square",
                  },
                  data.author,
                  isLibraryMode
                    ? (data as Book).language
                    : (data as ArticleRes).content,
                ],
              }))}
              onEdit={(id) => {
                const quoteToEdit = (isLibraryMode ? filteredBooks : filteredArticles).find((q) => q.id === id);
                if (quoteToEdit) {
                  setShowModal(true);
                  setSelectedItem(quoteToEdit);
                }
              }}
              onDelete={(id) => handleItemDelete(+id)}
            />
          )
        }

        <div className="left-[50%] absolute bottom-0 mb-10 flex items-center justify-center">
          <AnimatedButton
            onClick={() => {
              setSelectedItem(null);
              setShowModal(true);
            }}
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
