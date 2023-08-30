export function up(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary()
    table.string('task_details')
    table.boolean('priority')
    table.boolean('completed')
  })
}

export function down(knex) {
  return knex.schema.dropTable('tasks')
}
