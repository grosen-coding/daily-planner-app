import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todos/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  return (
    <div className='task'>
      <h4>{todo.text} <span>{new Date(todo.createdAt).toLocaleString('en-US')}</span></h4>
      <button onClick={() => dispatch(deleteTodo(todo._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default TodoItem
