import { model, Schema } from "mongoose"

const answerSchema = new Schema({
    text: { type: String, required: true },
    image: { type: String, required: true }
})

const explanationSchema = new Schema({
    text: { type: String, required: true },
    link: { type: String, required: true }
})

const questionSchema = new Schema({
    statement: { type: String, required: true, unique: true },
    correctAnswer: answerSchema,
    wrongAnswer: answerSchema,
    explanation: explanationSchema,
    audience: { type: String, required: true },
    topic: { type: String, required: true },
})

questionSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.correctAnswer.id
        delete returnedObject.wrongAnswer.id
        delete returnedObject.explanation.id
    }
})

export const Question = model('Question', questionSchema)