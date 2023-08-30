import { useQuery } from '@tanstack/react-query'
import AddTodo from './AddTodo.tsx'
import { fetchAllTask } from '../apis/task.ts'
import TaskList from './TaskList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main"></section>
      <TaskList />
      <footer className="footer"></footer>
    </>
  )
}

export default App
