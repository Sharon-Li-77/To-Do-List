import request from 'superagent'

export async function fetchAllTask() {
  const response = await request.get('/api/v1/tasks/')

  return response.body
}

export interface eachTask {
  task_details: string
  priority: boolean
  completed: boolean
}
export async function addTaskClient(task: eachTask) {
  await request.post('/api/v1/tasks').send(task)
}

interface updateTask {
  task_details: string
  priority: boolean
  completed: boolean
}

export async function updateTaskClient(id: number, updateTasks: updateTask) {
  await request.patch(`api/v1/tasks/${id}`).send({ updateTasks })
}

export async function deleteTaskClient(id: number) {
  await request.delete(`/api/v1/tasks/${id}`)
}
