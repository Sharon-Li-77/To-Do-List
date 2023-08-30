import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { eachTask, fetchAllTask, updateTaskClient } from '../apis/task'
import { updateTask } from '../../server/db/db'
import { useState } from 'react'

interface Ids {
  id: number
}

function EditTask(id: Ids) {
  const { data } = useQuery(['task'], fetchAllTask)
  const [editText, setEditText] = useState(false)
  console.log(id)
  const queryClinet = useQueryClient()
  // const updateMuation = useMutation({
  //   mutationFn: (task: string) => updateTaskClient({id.id, task}),
  //   onSuccess: () => {
  //     queryClinet.invalidateQueries(['task'])
  // },
  // })

  function handleEditing(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = e.currentTarget
    const form = new FormData(target)
    const task = form.get('edit-details')?.valueOf() as string
    // const priority = form.get('priority')?.valueOf() as string
    // const completed = form.get('completed')?.valueOf() as boolean
    // const finalTask = { task_details, priority, completed }
    // console.log(task_details, priority, completed)
    console.log('edit', id.id, task)

    updateMuation.mutate(task)
    setEditText(false)
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
    </>
  )
}

export default EditTask
