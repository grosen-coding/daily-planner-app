import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import ReminderItem from '../components/ReminderItem'
import ReminderForm from '../components/ReminderForm'
import TodoItem from '../components/TodoItem'
import TodoForm from '../components/TodoForm'
import NoteForm from '../components/NoteForm'
import NoteItem from '../components/NoteItem'
import PriorityForm from '../components/PriorityForm'
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
  const { goals, isLoading, isError, message } = useSelector(
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

    dispatch(getGoals())
    dispatch(getReminders())
    dispatch(getTodos())
    dispatch(getNotes())
    dispatch(getPriorities())


    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Planner Dashboard</p>
      </section>

      <GoalForm />

      <section className='content'>
        <h2>Goals</h2>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>

            <ReminderForm />

      <section className='content'>
        <h2>Reminders</h2>
        {reminders.length > 0 ? (
          <div className='goals'>
            {reminders.map((reminder) => (
              <ReminderItem key={reminder._id} reminder={reminder} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>

                  <TodoForm />

      <section className='content'>
        <h2>To-do List</h2>
        {todos.length > 0 ? (
          <div className='goals'>
            {todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </div>
        ) : (
          <h3>You have not set any to-dos</h3>
        )}
      </section>

      <NoteForm />

      <section className='content'>
        <h2>Notes</h2>
        {notes.length > 0 ? (
          <div className='goals'>
            {notes.map((note) => (
              <NoteItem key={note._id} note={note} />
            ))}
          </div>
        ) : (
          <h3>You have not set any notes</h3>
        )}
      </section>

          <PriorityForm />

      <section className='content'>
        <h2>Priorities</h2>
        {priorities.length > 0 ? (
          <div className='goals'>
            {priorities.map((priority) => (
              <PriorityItem key={priority._id} priority={priority} />
            ))}
          </div>
        ) : (
          <h3>You have not set any top priorities</h3>
        )}
      </section>

    </>
  )
}

export default Dashboard
