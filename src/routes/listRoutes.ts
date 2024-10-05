import express from 'express'
import { getRandomList } from '../controllers/getRandomList.js'

const listRoutes = express.Router()

listRoutes.get('/', getRandomList)

export default listRoutes