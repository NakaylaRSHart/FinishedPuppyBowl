import { useEffect, useState } from "react";
import SinglePlayer from "./SinglePlayer";

const AllPlayers = ({ needsUpdating, setNeedsUpdating, baseUrl }) => {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    if (needsUpdating) {
      const fetchAllPlayers = async () => {
        try {
          const response = await fetch(`${baseUrl}`);
          const result = await response.json();
          console.log(result.data.players);
          setPlayerList(result.data.players);

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

      <div className="playerList">
        {playerList.length ? (
          playerList.map((player) => (
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
