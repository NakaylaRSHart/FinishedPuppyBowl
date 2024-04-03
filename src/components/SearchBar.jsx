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
    <>
      <label id="searchBarDecor">
        Search:
        <input
          type='text'
          placeholder="search" 
          value={searchParam} // Add value attribute to reflect the current searchParam
          onChange={(e) => {
            setSearchParam(e.target.value.toLowerCase());
          }}
        />
      </label>
    </>
  );
};

export default SearchBar;

