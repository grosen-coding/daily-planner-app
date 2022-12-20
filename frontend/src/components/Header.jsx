import { FaPlusCircle, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (

    <header className='header'>
      {user ? (
            <button className='btn btn-add-task'>
              <FaPlusCircle /> 
            </button>
        ) : (
          <>
            <div className='logo'>
              <Link to='/'>Retro Daily Planner</Link>
            </div>
          </>
        )}

      {user ? (
            <h1>{user.name}'s daily planner</h1>
        ) : (
          <h1>your daily planner</h1>
        )}

      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaUser /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaPlusCircle /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
