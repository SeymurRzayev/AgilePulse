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
import AddBookForm from "../Forms/AddBookForm";
import AddArticleForm from "../Forms/AddArticleForm";
import AdminTable from "../Tables/AdminTable";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const AdminLibraryAndArticles = () => {
  const location = useLocation();
  const isLibraryMode = location.pathname.includes('library');

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Book | ArticleRes | null>(null);
  const [page, setPage] = useState<number>(1);
  const countPerPage = 10;

  // API çağırışları pagination parametrləri ilə
  const { data: allBookData, isLoading: isLoadingBooks } = useGetAllBookQuery({ page: page - 1, count: countPerPage });
  const { data: allArticleData, isLoading: isLoadingArticle } = useGetAllArticleQuery({ page: page - 1, count: countPerPage });

  const [deleteBook] = useDeleteBookMutation();
  const [deleteArticle] = useDeleteArticleMutation();

  const books = allBookData?.data?.data || [];
  const articles = allArticleData?.data?.data || [];

  // Ümumi element sayı və səhifə sayı
  const totalCount = isLibraryMode ? (allBookData?.data?.totalElements ?? 0) : (allArticleData?.data?.totalElements ?? 0);
  const totalPages = Math.ceil(totalCount / countPerPage);

  // Axtarışa uyğun filterləmə
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
        } else {
          await deleteArticle(id).unwrap();
        }
        Swal.fire('Silindi!', '', 'success');
        // Səhifəni sıfırlaya bilərsən və ya avtomatik yenilənəcək
      } catch {
        Swal.fire('Xəta!', 'Silinmə uğursuz oldu.', 'error');
      }
    }
  };

  // Modal bağlananda selectedItem sıfırlanır və səhifə 1-ə qaytarılır
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setPage(1);
  };

  return (
    <div className='w-full h-full'>
      {showModal && (
        <CustomModal
          onClose={handleCloseModal}
          title={`${isLibraryMode ? 'Kitab' : 'Məqalə'} ${selectedItem?.id ? 'üzərində dəyişiklik et' : 'əlavə et'}`}
        >
          {isLibraryMode ? (
            <AddBookForm
              initialData={selectedItem as Book}
              onSuccess={() => setShowModal(false)}
            />
          ) : (
            <AddArticleForm
              initialData={selectedItem as ArticleRes}
              onSuccess={() => setShowModal(false)}
            />
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
        <div className="w-full flex items-center justify-between px-3">
          <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal'>
            {isLibraryMode ? "Kitabxana" : "Məqalələr"}
          </h2>
          <div className="flex justify-end mt-2 mb-4">
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_event, value) => {
                  setPage(value);
                  setShowModal(false);
                }}
                color="primary"
              />
            </Stack>
          </div>
        </div>


        {(isLoadingBooks || isLoadingArticle)
          ? <LoadingSpinner className="mt-6" />
          : (
            <>
              <AdminTable
                theads={[`${isLibraryMode ? 'Kitabın adı' : 'Məqalənin adı'}`, `${isLibraryMode ? 'Yazıçı' : 'Məqalənin yazarı'}`, `${isLibraryMode ? 'Dil' : 'Məzmunu'}`]}
                allowActions={true}
                rows={(isLibraryMode ? filteredBooks : filteredArticles).map((data) => ({
                  id: data.id,
                  cells: [
                    {
                      text: isLibraryMode ? (data as Book).name : (data as ArticleRes).title,
                      image: data.imageUrl,
                      imageShape: "square",
                    },
                    data.author,
                    isLibraryMode ? (data as Book).language : (data as ArticleRes).content,
                  ],
                }))}
                onEdit={(id) => {
                  const itemToEdit = (isLibraryMode ? filteredBooks : filteredArticles).find((q) => q.id === id);
                  if (itemToEdit) {
                    setShowModal(true);
                    setSelectedItem(itemToEdit);
                  }
                }}
                onDelete={(id) => handleItemDelete(+id)}
              />

              {/* Pagination */}

            </>
          )
        }

      </div>

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
  );
};

export default AdminLibraryAndArticles;
