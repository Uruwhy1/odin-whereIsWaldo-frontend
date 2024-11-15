import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // prettier-ignore
  const [characters] = useState([
  { id: 1, name: "Sleeping Dragon", img: "/sleepingDragon.png", size: "medium" },
  { id: 2, name: "Red Dragon", img: "/redDragon.png", size: "medium" },
  { id: 3, name: "Yellow Fish", img: "/yellowFish.png", size: "very small" },
  { id: 4, name: "Ship Guy", img: "/shipGuy.png", size: "very small" },
  { id: 5, name: "Teacher", img: "/teacher.png", size: "very small" },
  { id: 6, name: "Cats", img: "/cats.png", size: "very small" },
  { id: 7, name: "Dragon and Human", img: "/dragonAndHuman.png", size: "small" },
  { id: 8, name: "Stupid Face", img: "/stupidFace.png", size: "big" },
  ]);

  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameTimer, setGameTimer] = useState(0);
  const [username, setUsername] = useState("");

  const chooseCharacters = () => {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());

    const selectedWithFound = shuffled.slice(0, 3).map((character) => ({
      ...character,
      found: false,
    }));

    setSelectedCharacters(selectedWithFound);
  };

  const startGame = () => {
    setIsGameStarted(true);
    setGameTimer(0);
    alert(`game started with username: ${username}`);
  };

  useEffect(() => {
    if (isGameStarted) {
      const timer = setInterval(() => setGameTimer((time) => time + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isGameStarted]);

  return (
    <GameContext.Provider
      value={{
        characters,
        selectedCharacters,
        setSelectedCharacters,
        isGameStarted,
        startGame,
        gameTimer,
        chooseCharacters,
        username,
        setUsername,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GameContext;
