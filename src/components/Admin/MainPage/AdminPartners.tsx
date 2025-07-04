import { useCreatePartnerMutation, useDeletePartnerMutation, useGetAllPartnersQuery, useUpdatePartnerMutation } from "../../../services/features/mainPage/partnerApi"
import CamIcon from "../../../assets/icons/camera_icon.svg";
import DelIcon from "../../../assets/icons/delete_icon.svg";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import Xicon from '../../../assets/icons/Modalcloseicon.svg';
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const AdminPartners = () => {
  const imgInp = useRef<HTMLInputElement>(null);

  const [showModal, setShowModal] = useState<boolean>(false);

  const { data: allPartners } = useGetAllPartnersQuery()
  const [updatePartner] = useUpdatePartnerMutation();
  const [deletePartner] = useDeletePartnerMutation();

  if (!allPartners) {
    return null;
  }

  const onDelete = async (id: number) => {
    const result = await Swal.fire({
      title: 'Əminsiniz?',
      text: 'Bu partnyoru silmək istədiyinizə əminsiniz?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Bəli, sil',
      cancelButtonText: 'İmtina',
    });

    if (result.isConfirmed) {
      try {
        await deletePartner(id).unwrap();
        Swal.fire('Uğurla', 'Partnyor uğurla silindi', 'success');
      } catch (error) {
        Swal.fire('Xəta', 'Partnyor silinərkən xəta baş verdi', 'error');
      }
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      await updatePartner({ id, body: formData }).unwrap();
      Swal.fire('Uğurla', 'Foto uğurla dəyişdirildi', 'success');
    } catch (error) {
      Swal.fire({ icon: "error", title: "Xəta", text: "Fayl yüklənmədi." });
    }
  };

  return (
    <div className=' w-full h-full py-10 '>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <div className="w-full flex justify-between px-3 ">
        <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3'>Partnyorlar</h2>
      </div>
      <div style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="grid grid-cols-2 w-[864px] h-[600px] gap-x-14 gap-y-2 overflow-auto">
        {
          allPartners?.map((partner) => (
            <div key={partner.id}
              className="w-[404px] h-[189px] p-5 bg-[#EAEDF5] rounded-[30px] flex justify-between items-center"
            >
              <img
                style={{ boxShadow: '4px 4px 4px 1px #00000017' }}
                className="w-[138px] h-[149px] object-cover object-center rounded-[10px]"
                src={partner.imageUrl} alt={partner.name}
              />
              <div className="flex gap-x-5">
                <input
                  ref={imgInp}
                  type="file"
                  hidden
                  onChange={(e) => handleImageChange(e, partner.id)}
                  id={`file-input-${partner.id}`}
                />
                <span
                  onClick={() => document.getElementById(`file-input-${partner.id}`)?.click()}
                  className="bg-[#44A15E66] cursor-pointer w-[60px] h-[48px] flex items-center justify-center rounded-[30px] p-2.5"
                >
                  <img src={CamIcon} />
                </span>
                <span
                  onClick={() => onDelete(partner.id)}
                  className="bg-[#DA3D6866] cursor-pointer w-[60px] h-[48px] flex items-center justify-center rounded-[30px] p-2.5"
                >
                  <img src={DelIcon} />
                </span>
              </div>
            </div>
          ))
        }
      </div>
      <div className=" w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
        <AnimatedButton onClick={() => setShowModal(prev => !prev)} className="!w-[185px] !h-[56px] !font-[Lexend]">
          Əlavə et <span className="text-3xl ml-2 font-light">+</span>
        </AnimatedButton>
      </div>
    </div>
  )
}

export default AdminPartners


interface ModalProps {
  onClose: () => void;
  isLibraryMode?: boolean;
}

const Modal = ({ onClose }: ModalProps) => {


  const [createPartner] = useCreatePartnerMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const fileInput = form.image as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (!name || !file) {
      Swal.fire('Xeta', 'Zəhmət olmasa ad və şəkil əlavə edin', 'error')
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);

    try {
      await createPartner(formData).unwrap();
      Swal.fire('Ugurlu', 'Partner ugurla elave edildi', 'success')
      onClose();
    } catch (error) {
      Swal.fire('Xeta', 'Xeta bas verdi', 'error')
      console.log(error);
    }
  }

  return (
    <div className="fixed z-50 inset-0 flex justify-center items-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white relative p-8 rounded-xl w-full max-w-2xl shadow-xl">
        <button
          onClick={onClose}
          className="absolute cursor-pointer right-4 top-4 text-gray-500 hover:text-gray-800 transition"
        >
          <img src={Xicon} alt="Bağla" className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-[#2C4B9B]">Yeni partner əlavə et</h2>
        <form
          className="!gap-y-3"
          onSubmit={handleSubmit}>
          <div className="mb-0">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Ad</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">Şəkil</label>
            <input
              type="file"
              name="image"
              id="image"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2C4B9B] cursor-pointer hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)]"
          >
            Yadda saxla
          </button>
        </form>
      </div>
    </div>
  );
};

