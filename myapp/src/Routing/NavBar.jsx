import {Link} from 'react-router-dom'
import './Nav.css'
const NavBar = () => {
  return (
    <>
    <nav>
        <Link to={'/'}>
    <li>Home</li>
    </Link>
    <Link to={'/about'}>
    <li>About</li>
    </Link>
    <Link to={'/contact'}>
    <li>Conatct us</li>
    </Link>

    </nav>

    
    </>
  )
}

export default NavBar

