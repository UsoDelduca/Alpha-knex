export async function up(knex) {
  await knex.schema.createTable('alphas', (table) => {
    table.increments('id').primary()
    table.string('colour')
    table.string('plate')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('alphas')
}
