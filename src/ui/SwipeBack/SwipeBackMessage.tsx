import { useState, useEffect } from "react";

export default function SwipeBackMessage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      // Mesajı avtomatik gizlətmək üçün ikinci setTimeout
      setTimeout(() => setShow(false), 3000);
    }, 1500); // səhifə yükləndikdən 1 saniyə sonra göstər

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-7 left-[40%] -translate-x-1/2 bg-[rgba(44,75,155,0.8)] bg-opacity-70 text-white px-4 py-1 rounded-4xl text-[12px] z-[1000] block lg:hidden">
      Geri qayıtmaq üçün sola sürüşdür
    </div>
  );
}
