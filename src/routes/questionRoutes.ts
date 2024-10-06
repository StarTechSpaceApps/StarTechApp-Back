import express from 'express'
import { fetchRandomQuestion } from '../controllers/fetchRandomQuestion.js'
import { createQuestion } from '../controllers/createQuestion.js'
import { fetchQuestion } from '../controllers/fetchQuestion.js'
import { editeQuestion } from '../controllers/editQuestion.js'
import { deleteQuestion } from '../controllers/deleteQuestion.js'

const questionRoutes = express.Router()

questionRoutes.get('/random', fetchRandomQuestion)

questionRoutes.get('/:id', fetchQuestion)

questionRoutes.put('/:id', editeQuestion)

questionRoutes.delete('/:id', deleteQuestion)

questionRoutes.post('/', createQuestion)

export default questionRoutes