import {Request, Response} from 'express'
import { Question } from '../database/questionSchema.js'

export const editeQuestion = async (req: Request, res: Response) => {
    const {id} = req.params
    const updatedData = req.body
    try {
        const editedQuestion = await Question.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true })
        if (editedQuestion){
            res.status(200).json(editedQuestion);
        }else{
            res.status(404).json({message: 'Question not found'})
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving question', error: err });
    }
}