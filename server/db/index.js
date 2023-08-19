import knexFile from './knexfile.js'
import knex from 'knex'

// type Environment = 'production' | 'test' | 'development'

const environment = process.env.NODE_ENV || 'development'
const config = knexFile[environment]
const db = knex.default(config)

export async function getCarById(id) {
  return await db('alphas').where('id', id).first()
}

export async function addNewCar(car) {
  return await db('alphas').insert(car)
}

export async function editCar(id, car) {
  return await db('alphas')
    .where('id', id)
    .update({ colour: car.colour, plate: car.plate })
}

export async function delCar(id) {
  return await db('alphas').where('id', id).del()
}
