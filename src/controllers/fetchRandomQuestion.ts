import { Request, Response } from 'express'
import { Question } from '../database/questionSchema.js'

export const fetchRandomQuestion = async (_req: Request, res: Response) => {
    try {
        const count = await Question.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);

        const randomQuestion = await Question.findOne().skip(randomIndex);

        if (randomQuestion) {
            res.status(200).json(randomQuestion)
        } else {
            res.status(404).json({ message: 'Question not found' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving the question', error: err });
    }
}