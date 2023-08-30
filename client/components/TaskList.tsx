import { useQuery } from '@tanstack/react-query'
import { fetchAllTask } from '../apis/task'

function TaskList() {
  const { data } = useQuery(['task'], fetchAllTask)
  return (
    <ul className="todo-list">
      {data &&
        data.map((item) => (
          <li key={item.id}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{item.task_details}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
    </ul>
  )
}

export default TaskList
