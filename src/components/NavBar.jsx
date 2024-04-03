//Where Search for Puppy bar will go

import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <>
      <div className='NavBarHeader'>
          <div>
            <h1>PUPPIES</h1>
          </div>

          <ul>
              <li>
                <Link to ='/'>Home</Link>
              </li>
          </ul>
        </div>
    </>
  )
}

export default NavBar;