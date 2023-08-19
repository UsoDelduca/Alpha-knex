import express from 'express'

import * as db from '../db/db.js'

import { addNewCar } from '../db/index.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const alphas = await db.getAlphas()
    res.render('index', { alphas: alphas })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

// get user input

router.post('/', async (req, res) => {
  const input = req.body

  // const filePath = Path.join(__dirname, 'data', 'data.json')

  const addCar = await addNewCar(input)
  console.log(addCar)

  res.redirect('/')
})

export default router
