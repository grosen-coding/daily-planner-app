import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../features/notes/noteSlice'
import {BsPlusSquare} from 'react-icons/bs'

function NoteForm() {
  const [text, setText] = useState('')
  const [isActive, setIsActive] = useState("form-inactive")

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createNote({ text }))
    setText('')
  }

  const handleToggle = () => {
    setIsActive(!isActive)
  }
  

  return (
    <div className='task-form form'>

      <div className='task-form-header' onClick={handleToggle}>
        <h3>Notes</h3>
        <BsPlusSquare className='task-add-icon'/>
      </div>

      <div className={`form-container ${isActive ? "form-inactive" : "form-active"}`} >
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='text'></label>
            <input className='task-input'
              type='text'
              name='text'
              placeholder='Type your new Note...'
              id='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-add' type='submit'>
              Add Note
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default NoteForm
