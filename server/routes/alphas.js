import express from 'express'

import * as db from '../db/db.js'

import { addNewCar, editCar, getCarById, delCar } from '../db/index.js'

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

  await addNewCar(input)

  res.redirect('/')
})

// edit user input

router.get('/edit/:id', async (req, res) => {
  const id = Number(req.params.id)

  const viewData = await getCarById(id)
  console.log(viewData)
  res.render('editCar', viewData)
})

// post edit input

router.post('/edit/:id', async (req, res) => {
  const input = req.body
  const id = Number(req.params.id)

  await editCar(id, input)
  res.redirect('/')
})

// delete Car

router.post('/edit/:id', async (req, res) => {
  // const input = req.body
  const id = req.body.id
  console.log(req.params.id)
  await db.delCar(id)
  res.redirect('/')
})

export default router
