import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const db = knex(config)

export async function getAlphas() {
  return db('alphas').select()
}

export async function getAlpha(id) {
  return db('alphas').where('id', id).first()
}
