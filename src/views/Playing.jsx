import { useContext } from "react";
import GameContext from "../contexts/GameContext";
import PropTypes from "prop-types";

const Playing = ({ setView }) => {
  const { selectedCharacters } = useContext(GameContext);

  return (
    <div>
      {selectedCharacters.map((character) => (
        <div key={character.name}>
          <img src={character.img} alt={character.name} width="100" />
          <p>{character.name}</p>
        </div>
      ))}{" "}
      <button onClick={() => setView("board")}>View Leaderboard</button>
    </div>
  );
};

Playing.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Playing;
