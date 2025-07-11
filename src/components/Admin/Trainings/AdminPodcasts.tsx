import React, { useState } from "react";
import AdminTable from "../General/AdminTable";
import TrainingsSearchContainer from "../../Trainings/TrainingsSearchContainer";
import {
  useDeletePodcastMutation,
  useGetAllPodcastQuery,
} from "../../../services/features/trainingPage/podcastApi";
import Swal from "sweetalert2";
import LoadingSpinner from "../../General/LoadingSpinner";

const AdminPodcasts: React.FC = () => {
  const { data: podcasts, isLoading } = useGetAllPodcastQuery();
  const [deletePodcast] = useDeletePodcastMutation();
  const [search, setSearch] = useState("");

  const handleDelete = async ({ id }: { id: number }) => {
    Swal.fire({
      title: "Əminsiniz?",
      text: "Bu Podcastı silmək istədiyinizdən əminsiniz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Bəli, sil",
      cancelButtonText: "Ləğv et",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deletePodcast(id).unwrap();
          Swal.fire("Silindi!", "Podcast uğurla silindi.", "success");
        } catch (error) {
          Swal.fire("Xəta!", "Silinmə zamanı xəta baş verdi.", "error");
        }
      }
    });
  };
  return (
    <div>
      <h2 className="text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3">
        Podcastlar
      </h2>

      <div className="w-full flex justify-between items-start">
        <div className="w-full h-fit">
          <TrainingsSearchContainer
            searchValue={search}
            onSearchChange={setSearch}
            filterIcon={false}
            height={56}
            isAdmin
          />
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner size={40} />
      ) : (
        <AdminTable
          theads={["Podcastın adı", "İştirakçının adı", "Açıqlama"]}
          allowActions={true}
          rows={(podcasts?.data.data ?? [])
            .filter((podcast) =>
              search
                ? podcast.topicTitle
                    .toLowerCase()
                    .includes(search.toLowerCase())
                : []
            )
            .map((podcast) => ({
              id: podcast.id,
              cells: [
                {
                  text: `${podcast.topicTitle} `,
                  image: podcast.imageUrl,
                  imageShape: "square",
                },
                podcast.speakerName,
                podcast.description,
              ],
            }))}
          onEdit={(id) => console.log("Edit:", id)}
          onDelete={(id) => handleDelete({ id: Number(id) })}
        />
      )}
    </div>
  );
};

export default AdminPodcasts;
