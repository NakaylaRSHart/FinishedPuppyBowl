import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from './Home'

const PlayerDetails = ({ baseUrl }) => {
  const [player, setPlayerDetails] = useState({});
  const { id } = useParams();

  console.log(`${baseUrl}/${id}`);

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const response = await fetch(`${baseUrl}/${id}`);
        const data = await response.json();

        console.log(data.data.player)

        setPlayerDetails(data.data.player);
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    };
    fetchSinglePlayer();
  }, [baseUrl, id]);

  return (
    <div className="playerDetails">
      <h1>Player Details</h1>
      <h2>Name: {player.name}</h2>
      <p>Breed: {player.breed}</p>
      <img className="playerImage" src={player.imageUrl} alt={player.name} />
      <p>Status: {player.status}</p>
    </div>
  );
};

export default PlayerDetails;
