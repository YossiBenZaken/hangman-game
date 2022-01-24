import { Figure } from "./components/Figure";
import { Header } from "./components/Header";
import "./App.css";
import { WrongLetters } from "./components/WrongLetters";
import { Word } from "./components/Word";
import { Popup } from "./components/Popup";
import { useEffect, useState } from "react";
import { showNotification as show } from "./helpers/helpers";
import { Notification } from "./components/Notification";

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const words = useState([
    "application",
    "programming",
    "interface",
    "wizard",
    "yossi",
    "uri",
    "javascript",
    "typescript",
    "react",
    "redux",
    "node",
    "express",
    "mongodb",
    "npm",
    "webpack",
    "babel",
    "nadav",
    "daniel",
    "david",
    "shlomi",
    "shlomo",
    "shlomit",
    "elinor",
    "elina",
  ])[0];
  const [selectedWord,setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter: string = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((correctLetters) => [...correctLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);
  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(random);
  }
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word word={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification show={showNotification} />
    </>
  );
}

export default App;
