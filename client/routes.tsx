import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import TaskList from './components/TaskList'
import EditTask from './components/EditTask'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}></Route>
)
