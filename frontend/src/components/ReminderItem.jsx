import { useDispatch } from 'react-redux'
import { deleteReminder } from '../features/reminders/reminderSlice'

function ReminderItem({ reminder }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(reminder.createdAt).toLocaleString('en-US')}</div>
      <h2>{reminder.text}</h2>
      <button onClick={() => dispatch(deleteReminder(reminder._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default ReminderItem
