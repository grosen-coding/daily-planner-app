import { useDispatch } from 'react-redux'
import { deletePriority } from '../features/priorities/prioritySlice'
import { FaTrashAlt } from 'react-icons/fa'

function PriorityItem({ priority }) {
  const dispatch = useDispatch()

  return (
    <li className='task'>
      <div className='task-title'>
        <h4>{priority.text}</h4>
      </div>
      <div className='task-info'>
        <h5>{new Date(priority.createdAt).toLocaleString('en-US')}</h5>
        <button onClick={() => dispatch(deletePriority(priority._id))} className='close'>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  )
}

export default PriorityItem
