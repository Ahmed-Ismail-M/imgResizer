import express from 'express'
import imgResize from './api/img'

const routes = express.Router()
routes.get('/', (req, res) => {
  res.status(200).send('Hi from main')
})
routes.use('/resize', imgResize)

export default routes
