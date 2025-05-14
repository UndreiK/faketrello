import { useState } from 'react'
import './App.css'
import TodoList, { type Task } from './TodoList'
import { v1 } from 'uuid'

export type FilterTypes = 'all' | 'active' | 'completed'

function App() {
  const initial: Task[] = [
    { id: v1(), title: 'css', isDone: true },
    { id: v1(), title: 'js', isDone: true },
    { id: v1(), title: 'react', isDone: false },
  ]

  const [tasks, setTasks] = useState(initial)
  let [filter, setFilter] = useState<FilterTypes>('all')

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const addTask = (title: string) => {
    setTasks([{ id: v1(), title: title, isDone: false }, ...tasks])
  }

  let tasksForTodoList = tasks
  if (filter === 'completed') {
    tasksForTodoList = tasks.filter((t) => t.isDone === true)
  }
  if (filter === 'active') {
    tasksForTodoList = tasks.filter((t) => t.isDone === false)
  }

  const changeFilter = (value: FilterTypes) => {
    setFilter(value)
  }

  return (
    <div className="">
      <TodoList
        title="what to learn"
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
    </div>
  )
}

export default App
