import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const task = await db.getTaskList()
    res.json(task)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get task list')
  }
})

router.post('/', async (req, res) => {
  try {
    const { task_details, priority, completed } = req.body

    const task = await db.addTask(task_details, priority, completed)
    res.status(200).json(task)
  } catch (err) {
    console.log(err)
    res.status(500).send('could not add task')
  }
})

router.patch('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const { task_details, priority, completed } = req.body
  try {
    await db.updateTask(id, task_details, priority, completed)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not update task')
  }
})

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    await db.deleteTask(id)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not delete task')
  }
})

export default router
