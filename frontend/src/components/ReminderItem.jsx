import { useDispatch } from 'react-redux'
import { deleteReminder } from '../features/reminders/reminderSlice'
import { FaTrashAlt } from 'react-icons/fa'

function ReminderItem({ reminder }) {
  const dispatch = useDispatch()

  return (
    <li className='task'>
      <div className='task-title'>
        <h4>{reminder.text}</h4>
      </div>
      <div className='task-info'>
        <h5>{new Date(reminder.createdAt).toLocaleString('en-US')}</h5>
        <button onClick={() => dispatch(deleteReminder(reminder._id))} className='close'>
          <FaTrashAlt />
        </button>
      </div>
    </li>
    
  )
}

export default ReminderItem
