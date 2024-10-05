import express from 'express'
import { createTestQuestion } from '../controllers/createTestQuestion.js'
import { createQuestion } from '../controllers/createQuestion.js'
import { fetchQuestion } from '../controllers/fetchQuestion.js'

const questionRoutes = express.Router()

questionRoutes.get('/:id', fetchQuestion)

questionRoutes.post('/', createQuestion)

export default questionRoutes