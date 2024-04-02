import { useState } from "react"

const SearchBar = () => {
  const [searchParam, setSearchParam] = useState();

  return(
    <label>
      Search:
      <input type='text'
        placeholder="search" 
        onChange={(e) => {
          setSearchParam(e.target.value)
      }}>
      </input>
    </label>
  )
}

export default SearchBar;