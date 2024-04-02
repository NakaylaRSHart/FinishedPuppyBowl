import './App.css';
import { useState } from 'react';
import NewPlayerForm from "./components/NewPlayerForm";
import AllPlayers from './components/AllPlayers'; 

const COHORT = "2402-NakaylaAPI"; 
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

const App = () => {

  const [needsUpdating, setNeedsUpdating] = useState(true);

  return (
    <>
      {/* <nav><NavBar

      />
      </nav> */}

      <div><NewPlayerForm 
      baseUrl={API_URL}
      setNeedsUpdating={setNeedsUpdating}
      />
      </div>

      <div><AllPlayers 
      baseUrl={API_URL} 
      needsUpdating={needsUpdating} 
      setNeedsUpdating={setNeedsUpdating}
      />
      </div>
    </>
  );
}

export default App;
