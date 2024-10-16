
import './Nav.css'
import {Link}  from 'react-router-dom'
const NavBar1 = () => {
  return (
    <div>
        <nav>
            <Link to='/'>  
            <li>Home</li>
            </Link>
            <Link  to='/cart'> 
            <li>Cart</li>
            </Link>

        </nav>
    </div>
  )
}

export default NavBar1
