import db from './connection.js'

export async function getTaskList() {
  return db('tasks').select()
}

export async function addTask(
  task_details: string,
  priority: string,
  completed: boolean
) {
  return db('tasks').insert({ task_details, priority, completed })
}

export async function updateTask(
  id: number,
  task_details: string,
  priority: string,
  completed: boolean
) {
  return db('tasks')
    .where({ id: id })
    .update({ task_details, priority, completed })
}

export async function deleteTask(id: number) {
  await db('tasks').where({ id: id }).delete()
}
