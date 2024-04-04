import { useNavigate } from "react-router-dom";

const SinglePlayer = ({ player, baseUrl, setNeedsUpdating }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const confirmed = window.confirm(`Are you sure you want to remove ${player.name}?`);
      if (!confirmed) {
        return;
      }

      const response = await fetch(`${baseUrl}/${player.id}`, {
        method: "DELETE"
      });
      const result = await response.json();
      if (result.success) {
        setNeedsUpdating(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePuppyDetailsClick = () => {
    navigate(`/player/${player.id}`);
  };

  return (
    <div id="playerCard">
      <h4 id='playerName'>{player.name}</h4>
      <img className="playerImage" src={player.imageUrl} alt={player.name} />
      <button onClick={handlePuppyDetailsClick} className= 'btn btn-outline-light'>Furbaby Details</button>
      <button onClick={handleClick} className= 'btn btn-outline-warning'>Remove Furbaby</button>
    </div>
  );
};

export default SinglePlayer;
