export async function seed(knex) {
  // Deletes ALL existing entries

  await knex('alphas').insert([
    { id: 1, colour: 'White', plate: 'MJE 421' },
    { id: 2, colour: 'Blue', plate: 'NUU 383' },
    { id: 3, colour: 'Red', plate: 'PNZ 686' },
  ])
}
