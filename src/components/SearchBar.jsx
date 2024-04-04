import { useEffect, useState } from "react";


const SearchBar = ({ playerList, setPlayerToDisplay}) => {
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    if (searchParam) {
      const filterList = playerList.filter((player) => {
        return player.name.toLowerCase().includes(searchParam);
      });
      setPlayerToDisplay(filterList);
    } 
    else{
      setPlayerToDisplay(playerList);
    }
  }, [searchParam]);

  return (
    <div className="navbar bg-body-tertiary" data-bs-theme="dark">
      <label id="wordsForSearchBar">
        Search for a Furbaby:
        <input
          type='text'
          placeholder="Search for furbaby" 
          value={searchParam}
          onChange={(e) => {
            setSearchParam(e.target.value.toLowerCase());
          }}
        />
      </label>
    </div>
  );
};

export default SearchBar;

