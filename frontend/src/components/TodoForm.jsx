import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../features/todos/todoSlice'
import {BsPlusSquare} from 'react-icons/bs'

function TodoForm() {
  const [text, setText] = useState('')
  const [isActive, setIsActive] = useState("form-inactive")

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createTodo({ text }))
    setText('')
  }

  const handleToggle = () => {
    setIsActive(!isActive)
  }
  

  return (
    <div className='task-form form'>

      <div className='task-form-header' onClick={handleToggle}>
        <h3>To Do</h3>
        <BsPlusSquare className='task-add-icon'/>
      </div>

      <div className={`form-container ${isActive ? "form-inactive" : "form-active"}`} >
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='text'></label>
            <input className='task-input'
              type='text'
              name='text'
              placeholder='Type your new To-Do...'
              id='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-add' type='submit'>
              Add To-Do
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default TodoForm
