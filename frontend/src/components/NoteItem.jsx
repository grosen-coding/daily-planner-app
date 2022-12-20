import { useDispatch } from 'react-redux'
import { deleteNote } from '../features/notes/noteSlice'
import { FaTrashAlt } from 'react-icons/fa'

function NoteItem({ note }) {
  const dispatch = useDispatch()

  return (
    <li className='task'>
      <div className='task-title'>
        <h4>{note.text}</h4>
      </div>
      <div className='task-info'>
        <h5>{new Date(note.createdAt).toLocaleString('en-US')}</h5>
        <button onClick={() => dispatch(deleteNote(note._id))} className='close'>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  )
}

export default NoteItem
