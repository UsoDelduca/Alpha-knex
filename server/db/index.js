import knexFile from './knexfile.js'
import knex from 'knex'

// type Environment = 'production' | 'test' | 'development'

const environment = process.env.NODE_ENV || 'development'
const config = knexFile[environment]
const db = knex.default(config)

export async function addNewCar(car) {
  return await db('alphas').insert(car)
}
