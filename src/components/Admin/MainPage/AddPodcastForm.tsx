import * as Yup from "yup";
import Swal from "sweetalert2";
import {
  useGetAllPodcastQuery,
  useCreatePodcastMutation,
  useUpdatePodcastMutation,
} from "../../../services/features/trainingPage/podcastApi";

import DynamicForm, { type FieldConfig } from "../../General/DynamicForm";
import type { Podcast } from "../../../types/types";

const AddPodcastForm = ({
  onSuccess,
  // isEdit,
  data,
}: {
  onSuccess: () => void;
  isEdit?: boolean;
  id?: number;
  data?: Podcast;
}) => {
  const [createPodcast] = useCreatePodcastMutation();
  const [updatePodcast] = useUpdatePodcastMutation();
  const { refetch } = useGetAllPodcastQuery();

  const fields: FieldConfig[] = [
    { name: "topicTitle", type: "text" },
    { name: "description", type: "text" },
    { name: "speakerName", type: "text" },
    { name: "youtubeUrl", type: "text" },
    { name: "imageUrl", type: "file", accept: "image/*", colSpan: 2 },
  ];

  const fieldLabels = {
    topicTitle: "Podcastın adı",
    description: "Açıqlama",
    speakerName: "İştirakçının adı",
    youtubeUrl: "Url",
    imageUrl: "Şəkil",
  };

  const validationSchema = Yup.object({
    topicTitle: Yup.string().required("Podcastın adı vacibdir"),
    description: Yup.string().required("Açıqlama vacibdir"),
    speakerName: Yup.string().required("İştirakçının adı vacibdir"),
    youtubeUrl: Yup.mixed().required("Url vacibdir"),
    imageUrl: data?.imageUrl ? Yup.mixed() : Yup.mixed().required("Şəkil vacibdir"),
  });

  const initialValues = {
    topicTitle: data?.topicTitle || "",
    description: data?.description || "",
    speakerName: data?.speakerName || "",
    youtubeUrl: data?.youtubeUrl || "",
    imageUrl: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      data
        ? await updatePodcast({ id: data.id, data: formData }).unwrap()
        : await createPodcast(formData).unwrap();

      refetch();
      Swal.fire("Uğurlu", "Podcast əlavə olundu", "success");
      onSuccess();
    } catch (e) {
      Swal.fire("Xəta", "Podcast əlavə edilə bilmədi", "error");
    }
  };

  return (
    <DynamicForm
      fields={fields}
      fieldLabels={fieldLabels}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
};

export default AddPodcastForm;
