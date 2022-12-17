import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header>
        <div><Link to="/">Daily Planner</Link></div>
        <ul>
            <li>
                <Link to="/login">Login<FaSignInAlt/></Link>
            </li>
            <li>
                <Link to="/register">Register<FaUser/></Link>
            </li>
        </ul>
    </header>
  )
}

export default Header