import { useState } from 'react'
import { FaPlusCircle, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { FormModal } from './FormModal'
import HeaderDate from './HeaderDate'


function Header() {

    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };


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
          <>
            <button className='btn btn-add-task'  onClick={openModal}>
              <FaPlusCircle/> 
            </button>
              <FormModal showModal={showModal} setShowModal={setShowModal} />
          </>
        ) : (
          <>
            <div className='logo'>
              <Link to='/'>Retro Daily Planner</Link>
            </div>
          </>
        )}

      {user ? (
        <>
            <h1>{user.name}'s daily planner</h1>
                    <h4><HeaderDate></HeaderDate></h4>
                    </>
        ) : (
          <h1>your daily planner</h1>
        )}


      <ul>
        {user ? (
          <li>
            <button className='btn btn-header' onClick={onLogout}>
              <FaUser /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <button className="btn btn-header">
                Login
                </button>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <button className="btn btn-header">
                Register
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
