import type { FilterTypes } from "./App"

export type Task = {
  id: number
  title: string
  isDone: boolean
}

type Props = {
  title: string
  tasks: Task[]
  removeTask: (id: number) => void
  changeFilter: (filter: FilterTypes) => void
}

const TodoList = (props: Props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((task) => (
          <li>
            <input type="checkbox" checked={task.isDone} />
            <span>{task.title}</span>
            <button onClick={() => props.removeTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => props.changeFilter("all")}>all</button>
        <button onClick={() => props.changeFilter("active")}>active</button>
        <button onClick={() => props.changeFilter("completed")}>
          completed
        </button>
      </div>
    </>
  )
}

export default TodoList
