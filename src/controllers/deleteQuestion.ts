import {Request, Response} from 'express'
import { Question } from '../database/questionSchema.js'  

export const deleteQuestion = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const deletedQuestion = await Question.findByIdAndDelete(id)
        if (deletedQuestion) {
            res.status(200).json({ message: `Question deleted succesfuly`, deletedQuestion})
        }else{
            res.status(404).json({message: 'Question not found'})
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting quesion', error: err });
    }
}