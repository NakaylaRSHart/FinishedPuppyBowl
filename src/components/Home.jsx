import '/src/App.css';
import { useState } from 'react';
import NewPlayerForm from "/src/components/NewPlayerForm";
import AllPlayers from '/src/components/AllPlayers';


const Home = () => {

  const COHORT = "2402-NakaylaAPI"; 
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;


  const [needsUpdating, setNeedsUpdating] = useState(true);

  return (
    <>
      

      <div>
        <NewPlayerForm baseUrl={API_URL} setNeedsUpdating={setNeedsUpdating} />
      </div>

      <div>
        <AllPlayers
          baseUrl={API_URL}
          needsUpdating={needsUpdating}
          setNeedsUpdating={setNeedsUpdating}
        />
      </div>
    </>
  );
};

export default Home;
