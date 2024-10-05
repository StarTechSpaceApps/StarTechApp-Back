import { Request, Response } from 'express';
import { Question } from '../database/questionSchema.js';
import { Types } from 'mongoose';

export const getRandomList = async (_req: Request, res: Response) => {
    try {
        const questions = await Question.find({}, { id: 1 });

        const list: Types.ObjectId[] = questions.map(question => question._id);

        const shuffleArray = (ids: Types.ObjectId[]) => {
            return ids.sort(() => Math.random() - 0.5);
        };

        const randomList = shuffleArray(list)

        res.status(200).json(randomList);
    } catch (err) {
        console.error('Error retrieving question IDs:', err);
        res.status(500).json({ message: 'Error retrieving question IDs' });
    }
};
