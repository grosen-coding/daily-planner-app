import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todos/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  return (
    <li className='task'>
      <div className='task-title'>
        <h4>{todo.text}</h4>
      </div>
      <div className='task-info'>
        <h5>{new Date(todo.createdAt).toLocaleString('en-US')}</h5>
        <button onClick={() => dispatch(deleteTodo(todo._id))} className='close'>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
