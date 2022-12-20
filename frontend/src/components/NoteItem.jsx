import { useDispatch } from 'react-redux'
import { deleteNote } from '../features/notes/noteSlice'

function NoteItem({ note }) {
  const dispatch = useDispatch()

  return (
    <div className='task'>
      <h4>{note.text} 
        <span>{new Date(note.createdAt).toLocaleString('en-US')}</span>
      </h4>
      <button onClick={() => dispatch(deleteNote(note._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default NoteItem
