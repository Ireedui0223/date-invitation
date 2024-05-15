import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Үгүй",
      "Итгэлтэй байна уу?",
      "Үнэхээр итгэлтэй байна уу?",
      "Дахиад бодоод үзэлдээ!",
      "За сүүлийн боломж!",
      "Надаараа тоглоол?",
      "Битий даажигнаад байлдаа!",
      "Үнэхээр үгүй гэж үү?",
      "Харамсавдаа!",
      "Дахиад бодоод үз!",
      "Нээрээ үгүй гэж үү?",
      "Бүүр ингэж байнуу тэ!",
      "Сүүлийн хариулт чинь мөнүү?",
      "За яах вээ чамаар шалаа угаалгахаа мэдье !",
      "Шалны алчуураа бэлдээдэхье ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://i.pinimg.com/originals/58/77/c1/5877c185238a28d3305a5421933f8c3a.gif" />
            <div className="text-container ">😇Тиймээ😇<br /> Орой 6с шүү😘</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://www.icegif.com/wp-content/uploads/2024/01/icegif-901.gif"
            />
            <h1 className="text-container">Надтай орой болзох уу?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Тийм
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "Үгүй" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
