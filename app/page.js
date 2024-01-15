"use client";
import MainMenu from "./Components/UI/MainMenu";
import GameMenu from "./Components/UI/GameMenu";
import { useState } from "react";

export default function Home() {
  const [showGameMenu, setShowGameMenu] = useState(false);

  const startGame = () => {
    setShowGameMenu(true);
  };

  const backToMenu = () => {
    setShowGameMenu(false);
  };

  return (
    <div className="p-2 px-4 bg-sky-100 text-sky-950">
      {!showGameMenu ? (
        <MainMenu startGame={startGame} />
      ) : (
        <GameMenu backToMenu={backToMenu} />
      )}
    </div>
  );
}
