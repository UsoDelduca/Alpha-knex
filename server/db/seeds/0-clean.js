export async function seed(knex) {
  await knex('alphas').del()
}
