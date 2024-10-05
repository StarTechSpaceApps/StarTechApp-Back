import express from 'express'
import { fetchRandomQuestion } from '../controllers/fetchRandomQuestion.js'
import { createQuestion } from '../controllers/createQuestion.js'
import { fetchQuestion } from '../controllers/fetchQuestion.js'

const questionRoutes = express.Router()

questionRoutes.get('/random', fetchRandomQuestion)

questionRoutes.get('/:id', fetchQuestion)

questionRoutes.post('/', createQuestion)

export default questionRoutes