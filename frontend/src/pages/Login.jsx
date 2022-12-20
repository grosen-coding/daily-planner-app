import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className='login-container'>
        <section className='login-heading'>
          <h1>
            Welcome!!
          </h1>
          <p>Please login below to begin planning your day!</p>
        </section>

        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={email}
                placeholder='Enter your email'
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={password}
                placeholder='Enter password'
                onChange={onChange}
              />
            </div>

            <div className='form-group'>
              <button type='submit' className='btn btn-block'>
                Submit
              </button>
            </div>
          </form>

        </section>
          <section className='login-register'>
            <p>New user? Please <Link to='/register'>
                <span>Register</span></Link> first to get started.</p>
          </section>
      </div>
    </>
  )
}

export default Login
