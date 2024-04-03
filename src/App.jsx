import './App.css';
import AllPlayers from './components/AllPlayers';
import { Route, Routes } from 'react-router-dom';
import PlayerDetails from './components/PlayerDetails';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
 

const App = () => {
  const COHORT = "2402-NakaylaAPI"; 
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

  // const [needsUpdating, setNeedsUpdating] = useState(true);

  return (
    <>
    <NavBar />
      
      <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/PlayerDetails' element={<AllPlayers/>}></Route>
        <Route path='/player/:id' element={<PlayerDetails baseUrl={API_URL}/>}></Route>
        
      </Routes>
      </div>
    </>
  );
}

export default App;
