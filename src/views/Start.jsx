import { useContext, useEffect } from "react";
import GameContext from "../contexts/GameContext";
import PropTypes from "prop-types";
import styles from "./Start.module.css";
import Character from "../components/Character";

const Start = ({ setView }) => {
  const {
    username,
    setUsername,
    startGame,
    chooseCharacters,
    selectedCharacters,
  } = useContext(GameContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(chooseCharacters, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.left}>
          <img src="/island.png" alt="Island" />
        </div>
        <div className={styles.right}>
          <div>
            <h3>Welcome to the Game!</h3>
            <p>
              You will be presented with a bustling island filled with
              characters. Your goal is to find the three randomly selected
              characters as quickly as possible.
            </p>
          </div>
          <div className={styles.usernameInput}>
            <label htmlFor="username">Choose your username:</label>
            <input
              onChange={handleUsernameChange}
              id="username"
              type="text"
              placeholder="username"
              value={username}
            />
          </div>
          <div className={styles.characters}>
            {selectedCharacters.map((character) => (
              <Character key={character.id} character={character} />
            ))}
          </div>
          <button
            className={styles.start}
            onClick={() => {
              startGame();
              setView("playing");
            }}
          >
            START GAME
          </button>
        </div>
      </div>
    </div>
  );
};

Start.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Start;
