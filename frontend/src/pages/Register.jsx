import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'


function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
    <section>
        <h1><FaUser /> Register</h1>
        <p>Please create an account</p>
    </section>

    <section>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" id="name" name="name" value={name} placeholder="Enter name" onChange={onChange}/>
            </div>
                        <div className="form-group">
                <input type="email" id="email" name="email" value={email} placeholder="Enter email" onChange={onChange}/>
            </div>
                        <div className="form-group">
                <input type="password" id="password" name="password" value={password} placeholder="Enter a password" onChange={onChange}/>
            </div>
                        <div className="form-group">
                <input type="password" id="password2" name="password2" value={password2} placeholder="Confirm a password" onChange={onChange}/>
            </div>
            <div className="form-group">
                <button type='submit'>Submit</button>
            </div>
        </form>
    </section>

    </>
  )
}

export default Register