

const SinglePlayer = ({ player, baseUrl, setNeedsUpdating}) => {

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

  const seeDetails = async () => {
    
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
