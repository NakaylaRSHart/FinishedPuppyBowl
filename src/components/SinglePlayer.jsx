// import { useNavigate } from 'react-router-dom';

const SinglePlayer = ({ player, baseUrl, setNeedsUpdating}) => {

  // const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await fetch(`${baseUrl}/${player.id}`, {
        method:`DELETE`
      }); 
      const result = await response.json();
      if(result.success){
        setNeedsUpdating(true);
      }
      
    } catch (err) {
      console.log(err);
    }
  }

  const seeDetails = () => {
    <h1>Player Name</h1>
    // navigate(`${baseUrl}/${player.id}`)
  }

  return (
    <>
      <div id="playerCard">
        <h4 id='playerName'>{player.name}</h4>
        <p id='playerBreed'>{player.breed}</p>
        <img className="playerImage" src={player.imageUrl} alt={player.name} />
        <button onClick={handleClick}>Adopt Puppy</button>
        <button onClick={seeDetails}>Puppy Details</button> 
      </div>
    </>
  )
}

export default SinglePlayer;
