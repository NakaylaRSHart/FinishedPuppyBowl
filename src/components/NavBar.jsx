

import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <>
      <div className="NavBarHeader" >
          <div>
            <h1>PUPPIES</h1>
          </div>

          <div>
            <Link className='btn btn-outline-light' to ='/'>Home</Link>
          </div>
               
            
        </div>
    </>
  )
}

export default NavBar;