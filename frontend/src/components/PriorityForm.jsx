import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPriority } from '../features/priorities/prioritySlice'
import {BsPlusSquare} from 'react-icons/bs'

function PriorityForm() {
  const [text, setText] = useState('')
  const [isActive, setIsActive] = useState("form-inactive")

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createPriority({ text }))
    setText('')
  }

  const handleToggle = () => {
    setIsActive(!isActive)
  }
  

  return (
    <div className='task-form form'>

      <div className='task-form-header' onClick={handleToggle}>
        <h3>Top Priorities</h3>
        <BsPlusSquare className='task-add-icon'/>
      </div>

      <div className={`form-container ${isActive ? "form-inactive" : "form-active"}`} >
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='text'></label>
            <input className='task-input'
              type='text'
              name='text'
              placeholder='Type your new Top Priority...'
              id='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-add' type='submit'>
              Add top Priority
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default PriorityForm
