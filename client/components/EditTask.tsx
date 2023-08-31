import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  deleteTaskClient,
  eachTask,
  fetchAllTask,
  updateTaskClient,
} from '../apis/task'
import { updateTask } from '../../server/db/db'
import { useState } from 'react'

interface Props {
  id: number
}

function EditTask(props: Props) {
  const { data } = useQuery(['task'], fetchAllTask)
  const [editText, setEditText] = useState(false)
  const queryClinet = useQueryClient()
  const updateMuation = useMutation({
    mutationFn: (task: string) =>
      updateTaskClient({ id: props.id, task_details: task }),
    onSuccess: () => {
      queryClinet.invalidateQueries(['task'])
    },
  })

  const deleteMuation = useMutation({
    mutationFn: (id: number) => deleteTaskClient(id),
    onSuccess: () => {
      queryClinet.invalidateQueries(['task'])
    },
  })

  function deleteClick(id: number) {
    deleteMuation.mutate(props.id)
  }

  function handleEditing(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = e.currentTarget
    const form = new FormData(target)
    const task_details = form.get('edit-details')?.valueOf() as string
    // const priority = form.get('priority')?.valueOf() as string
    // const completed = form.get('completed')?.valueOf() as boolean
    // const finalTask = { task_details, priority, completed }
    // console.log(task_details, priority, completed)
    // console.log('edit', id.id, task_details)

    updateMuation.mutate(task_details)
  }

  return (
    <>
      <form onSubmit={handleEditing}>
        <input
          placeholder="Edit Task_details?"
          className="new-todo"
          type="text"
          name="edit-details"
        />
      </form>
      <button
        onClick={() => deleteClick(props.id)}
        className="destroy"
      ></button>
    </>
  )
}

export default EditTask
