import { Request, Response } from "express";
import { Question } from "../database/questionSchema.js";

export const createQuestion = async (req: Request, res: Response) => {
    const {statement, correctAnswer, wrongAnswer, explanation, audience, topic} = req.body; // Tomar datos del cuerpo de la solicitud
    try {
        const newQuestion = new Question({
            statement: statement,
            correctAnswer: correctAnswer,
            wrongAnswer: wrongAnswer,
            explanation: explanation,
            audience: audience || "adult",
            topic: topic || "test",
        });

        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (err) { 
        res.status(500).json({ message: 'Error creating question', err });
    }
};
