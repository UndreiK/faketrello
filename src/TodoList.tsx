export type Task = {
  id: number
  title: string
  isDone: boolean
}

type Props = {
  title: string
  tasks: Task[]
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
        <li>
          <input type="checkbox" checked={props.tasks[0].isDone} />
          <span>{props.tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[1].isDone} />
          <span>{props.tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[2].isDone} />
          <span>{props.tasks[2].title}</span>
        </li>
      </ul>
    </>
  )
}

export default TodoList
