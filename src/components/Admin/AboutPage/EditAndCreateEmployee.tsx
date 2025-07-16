import { useState } from "react";

interface EditAndCreateEmployeeProps {
  initialName?: string;
  initialSurname?: string;
  initialPosition?: string;
  initialDescription?: string;
  initialImg?: string;
  id?: number;
  onClose?: () => void;
}

const EditAndCreateEmployee = ({
  initialName,
  initialSurname,
  initialPosition,
  initialDescription,

//   id,
//   onClose,
}: EditAndCreateEmployeeProps) => {
  const [name, setName] = useState(initialName ?? "");
  const [surname, setSurname] = useState(initialSurname ?? "");
  const [position, setPosition] = useState(initialPosition ?? "");
  const [description, setDescription] = useState(initialDescription ?? "");
  const [, setImage] = useState<File | null>(null);
// image


  return (
       <div className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
            placeholder="İşçinin  adı"
          />
    
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
            placeholder="İşçinin soyadı"
          />
    
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
            placeholder="İşçinin  vəzifəsi"
          />
    
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="resize-none w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
            placeholder="İşçi haqqında"
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImage(file);
              }
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
            placeholder="İşçinin  Fotosu"
          />
          <button
            onClick={()=>{}}
            className="w-full mt-5 flex items-center justify-center cursor-pointer bg-[#2C4B9B] hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)]"
          >
           Yarat
          </button>
        </div>
  );
};

export default EditAndCreateEmployee;
