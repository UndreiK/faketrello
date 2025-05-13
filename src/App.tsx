import './App.css'
import TodoList, { type Task } from './TodoList'

function App() {
  const tasks1: Task[] = [
    { id: 1, title: 'css', isDone: true },
    { id: 2, title: 'js', isDone: true },
    { id: 3, title: 'react', isDone: false },
  ]

  const tasks2: Task[] = [
    { id: 1, title: 'house', isDone: true },
    { id: 2, title: 'tree', isDone: true },
    { id: 3, title: 'son', isDone: false },
  ]

  return (
    <div className="">
      <TodoList title="what to learn" tasks={tasks1} />
      <TodoList title="to do" tasks={tasks2} />
    </div>
  )
}

export default App
