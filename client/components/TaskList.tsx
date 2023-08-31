import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  deleteTaskClient,
  eachTask,
  fetchAllTask,
  updateTaskClient,
} from '../apis/task'
import { updateTask } from '../../server/db/db'
import EditTask from './EditTask'

function TaskList() {
  const { data } = useQuery(['task'], fetchAllTask)

  return (
    <ul className="todo-list">
      {data &&
        data.map((item) => (
          <li key={item.id}>
            <EditTask id={item.id} />
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{item.task_details}</label>
            </div>
          </li>
        ))}
    </ul>
  )
}

export default TaskList
