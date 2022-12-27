import { useEffect, useState} from 'react'
// import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReminderItem from '../components/ReminderItem'
import TodoItem from '../components/TodoItem'
import NoteItem from '../components/NoteItem'
import PriorityItem from '../components/PriorityItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import { getNotes } from '../features/notes/noteSlice'
import { getPriorities } from '../features/priorities/prioritySlice'
import { getReminders } from '../features/reminders/reminderSlice'
import { getTodos } from '../features/todos/todoSlice'


function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, message } = useSelector(
    (state) => state.goals
  )
  const { reminders } = useSelector(
    (state) => state.reminders
  )
    const { todos } = useSelector(
    (state) => state.todos
  )
  const { notes } = useSelector(
    (state) => state.notes
  )
  const { priorities } = useSelector(
    (state) => state.priorities
  )


  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getReminders())
    dispatch(getTodos())
    dispatch(getNotes())
    dispatch(getPriorities())
    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='tasks-container'>
{/* TOP PRIORITIES LIST */}
      {/* <Zoom> */}
        <div className='task-card'>
            <h2>Top Priorities</h2>
            {priorities.length > 0 ? (
              <ul className='task-items'>
                {priorities.map((priority) => (
                  <PriorityItem key={priority._id} priority={priority} />
                ))}
              </ul>
          ) : (
            <h3>You have not set any top priorities</h3>
          )}
        </div>
      {/* </Zoom> */}
{/* REMINDERS LIST */}
            {/* <Zoom> */}
        <div className='task-card'>
          <h2>Reminders</h2>
          {reminders.length > 0 ? (
            <ul className='task-items'>
              {reminders.map((reminder) => (
                <ReminderItem key={reminder._id} reminder={reminder} />
              ))}
            </ul>
          ) : (
            <h3>You have not set any reminders</h3>
          )}
        </div>
        {/* </Zoom> */}
{/* TO DO LIST */}
{/* <Zoom> */}
        <div className='task-card'>
          <h2>To-do List</h2>
          {todos.length > 0 ? (
            <ul className='task-items'>
              {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} />
              ))}
            </ul>
          ) : (
            <h3>You have not set any to-dos</h3>
          )}
        </div>
        {/* </Zoom> */}
{/* NOTES LIST */}
{/* <Zoom> */}
        <div className='task-card'>
          <h2>Notes</h2>
          {notes.length > 0 ? (
            <ul className='task-items'>
              {notes.map((note) => (
                <NoteItem key={note._id} note={note} />
              ))}
            </ul>
          ) : (
            <h3>You have not set any notes</h3>
          )}
        </div>
        {/* </Zoom> */}
      </section>
    </>
  )
}

export default Dashboard
