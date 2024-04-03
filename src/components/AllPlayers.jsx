import { useEffect, useState } from "react";
import SinglePlayer from "./SinglePlayer";
import SearchBar from "./SearchBar";

const AllPlayers = ({ needsUpdating, setNeedsUpdating, baseUrl }) => {
  const [playerList, setPlayerList] = useState([]);
  const [playerToDisplay, setPlayerToDisplay] = useState([]);

  useEffect(() => {
    if (needsUpdating) {
      const fetchAllPlayers = async () => {
        try {
          const response = await fetch(`${baseUrl}`);
          const result = await response.json();
          console.log(result.data.players);
          setPlayerList(result.data.players);
          setPlayerToDisplay(result.data.players);
        } catch (error) {
          console.error(error);
        }
      };
      fetchAllPlayers();
      setNeedsUpdating(false);
    }
  }, [needsUpdating, setNeedsUpdating, baseUrl]);

  return (
    <>
     
      <h3>Participants</h3>

      <SearchBar
        playerList={playerList}
        setPlayerToDisplay={setPlayerToDisplay} 
      />

      <div className="playerList">
        {playerToDisplay.length ? (
          playerToDisplay.map((player) => (
            <SinglePlayer key={`player ${player.id}`} player={player} baseUrl={baseUrl} setNeedsUpdating={setNeedsUpdating}/> 
          ))
        ) : (
          <p>No Players yet</p>
        )}
      </div>
    </>
  );
};

export default AllPlayers;

