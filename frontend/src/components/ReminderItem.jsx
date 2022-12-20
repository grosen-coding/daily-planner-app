import { useDispatch } from 'react-redux'
import { deleteReminder } from '../features/reminders/reminderSlice'

function ReminderItem({ reminder }) {
  const dispatch = useDispatch()

  return (
    <div className='task'>
      <h4>{reminder.text} <span>{new Date(reminder.createdAt).toLocaleString('en-US')}</span></h4>
      <button onClick={() => dispatch(deleteReminder(reminder._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default ReminderItem
