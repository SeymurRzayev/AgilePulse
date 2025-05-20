import userPhoto from "../assets/images/user.png"
import certificate from "../assets/images/certificate.png"
import Trainer1 from '../assets/images/trainer1.jpg'
import Trainer2 from '../assets/images/trainer2.jpg'
import Trainer3 from '../assets/images/trainer3.jpg'
import Image1 from '../assets/images/training1.jpg'
import Image2 from '../assets/images/training2.jpg'
import Image3 from '../assets/images/training3.jpg'
export const dummyMock = [
  {
    id: 1,
    profileImgUrl: `${Trainer1}`,
    imgUrl: `${Image1}`,
    certificate,
    userPhoto,
    title: "Scrum nədir? Praktik Başlanğıc",
    description: "4 modul · 16 blok",
    author: "Tofiq Isayev",
    date: "20.02.2025"
  },
  {
    id: 2,
    profileImgUrl: `${Trainer2}`,
    imgUrl: `${Image2}`,
    certificate,
    title: "Agile Manifesto və 12 Prinsip",
    userPhoto,
    description: "3 modul · 12 blok",
    author: "Ayşən Məmmədova",
    date: "15.03.2025",
  },
  {
    id: 3,
    profileImgUrl: `${Trainer3}`,
    imgUrl: `${Image3}`,
    certificate,
    title: "Kanban ilə İş Axınını Optimallaşdır",
    userPhoto,
    description: "5 modul · 20 blok",
    author: "Emin Əliyev",
    date: "01.04.2025",
  },
];
