import './App.css';
import { useState } from 'react';
import NewPlayerForm from "./components/NewPlayerForm";
import AllPlayers from './components/AllPlayers';
import { Route, Routes } from 'react-router-dom';
import PlayerDetails from './components/PlayerDetails';
import Home from "./components/Home";
 

const COHORT = "2402-NakaylaAPI"; 
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

const App = () => {

  const [needsUpdating, setNeedsUpdating] = useState(true);

  return (
    <>
      {/* <div>
        <h1>ADOPT A PUPPER</h1>
      </div>

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
      </div> */}
      
      <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/PlayerDetails' element={<AllPlayers/>}></Route>
        <Route path='/PlayerDetails/:id' element={<PlayerDetails/>}></Route>
        
      </Routes>
      </div>
    </>
  );
}

export default App;
