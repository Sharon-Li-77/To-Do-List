import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addTaskClient, eachTask, fetchAllTask } from '../apis/task'
import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const { data } = useQuery(['task'], fetchAllTask)

  const queryClinet = useQueryClient()
  const addMuation = useMutation({
    mutationFn: (task: eachTask) => addTaskClient(task),
    onSuccess: () => {
      queryClinet.invalidateQueries(['task'])
    },
  })

  function handleSumit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = e.currentTarget
    const form = new FormData(target)
    const task_details = form.get('name')?.valueOf() as string
    // const priority = form.get('priority')?.valueOf() as string
    // const completed = form.get('completed')?.valueOf() as boolean
    // const finalTask = { task_details, priority, completed }
    // console.log(task_details, priority, completed)
    console.log(task_details)
    addMuation.mutate({ task_details, priority: false, completed: false })
  }

  return (
    <>
      <form onSubmit={handleSumit}>
        <input
          className="new-todo"
          placeholder="Task_details?"
          autoFocus={true}
          name="name"
        />
      </form>
    </>
  )
}

export default AddTodo
