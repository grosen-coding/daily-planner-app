import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createReminder } from '../features/reminders/reminderSlice'

function ReminderForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createReminder({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Reminder</label>
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
            Add a Reminder
          </button>
        </div>
      </form>
    </section>
  )
}

export default ReminderForm
