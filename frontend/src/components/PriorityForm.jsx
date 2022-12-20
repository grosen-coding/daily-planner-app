import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPriority } from '../features/priorities/prioritySlice'

function PriorityForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createPriority({ text }))
    setText('')
  }

  return (
    <section className='task-form form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Priority</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Top Priority
          </button>
        </div>
      </form>
    </section>
  )
}

export default PriorityForm
