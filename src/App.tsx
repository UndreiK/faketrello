import { useState } from "react"
import "./App.css"
import TodoList, { type Task } from "./TodoList"

export type FilterTypes = "all" | "active" | "completed"

function App() {
  const initial: Task[] = [
    { id: 1, title: "css", isDone: true },
    { id: 2, title: "js", isDone: true },
    { id: 3, title: "react", isDone: false },
  ]

  const [tasks, setTasks] = useState(initial)
  let [filter, setFilter] = useState<FilterTypes>("all")

  const removeTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  let tasksForTodoList = tasks
  if (filter === "completed") {
    tasksForTodoList = tasks.filter((t) => t.isDone === true)
  }
  if (filter === "active") {
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
      />
    </div>
  )
}

export default App
