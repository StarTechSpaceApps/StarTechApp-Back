export interface IQuestion{
    statment: string,
    correctAnswer: {text: string, image: string},
    wrongAnswer: {text: string, image: string},
    explanation: {text: string, link: string},
    audience: string,
    topic: string
}