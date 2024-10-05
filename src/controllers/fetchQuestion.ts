import { Request, Response } from 'express'
import { Question } from '../database/questionSchema.js'

export const fetchQuestion = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const question = await Question.findById(id)
        if (question) {
            res.status(200).json(question)
        } else {
            res.status(404).json({ message: 'Question not found' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving the question', error: err });
    }
}