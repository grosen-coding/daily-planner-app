import { useDispatch } from 'react-redux'
import { deletePriority } from '../features/priorities/prioritySlice'

function PriorityItem({ priority }) {
  const dispatch = useDispatch()

  return (
    <div className='priority'>
      <div>{new Date(priority.createdAt).toLocaleString('en-US')}</div>
      <h2>{priority.text}</h2>
      <button onClick={() => dispatch(deletePriority(priority._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default PriorityItem
