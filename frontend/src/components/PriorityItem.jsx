import { useDispatch } from 'react-redux'
import { deletePriority } from '../features/priorities/prioritySlice'

function PriorityItem({ priority }) {
  const dispatch = useDispatch()

  return (
    <div className='task'>
      <div></div>
      <h4>{priority.text} <span>{new Date(priority.createdAt).toLocaleString('en-US')}</span></h4>
      <button onClick={() => dispatch(deletePriority(priority._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default PriorityItem
