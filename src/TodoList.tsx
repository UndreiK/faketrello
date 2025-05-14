import { useState, type ChangeEvent, type KeyboardEvent } from 'react'
import type { FilterTypes } from './App'

export type Task = {
  id: string
  title: string
  isDone: boolean
}

type Props = {
  title: string
  tasks: Task[]
  removeTask: (id: string) => void
  changeFilter: (filter: FilterTypes) => void
  addTask: (title: string) => void
}

const TodoList = (props: Props) => {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value)
  }

  const onKeyPresHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      props.addTask(newTaskTitle)
      setNewTaskTitle('')
    }
  }

  const addTask = () => {
    props.addTask(newTaskTitle)
    setNewTaskTitle('')
  }

  return (
    <>
      <h3>{props.title}</h3>
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          onKeyPress={onKeyPresHandler}
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.isDone} />
            <span>{task.title}</span>
            <button onClick={() => props.removeTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => props.changeFilter('all')}>all</button>
        <button onClick={() => props.changeFilter('active')}>active</button>
        <button onClick={() => props.changeFilter('completed')}>
          completed
        </button>
      </div>
    </>
  )
}

export default TodoList
