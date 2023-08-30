export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    { id: 1, task_details: 'bread', priority: 'yes', completed: 0 },
    { id: 2, task_details: 'rice', priority: 'yes', completed: 1 },
  ])
}
