import React from 'react'
import Answer from './Answer'
import './Question.css'
import { decode } from 'html-entities'

export default function Question(props) {

    const [answers, setAnswers] = React.useState(createAnswers())

    function createAnswers () {
        const answersArray = []
        for (let i = 0; i < props.incorrect_answers.length + 1; i++) {
            answersArray.push({
                id: i,
                key: i,
                isSelected: false,
                isCorrect: props.incorrect_answers[i] ? false : true,
                answer: decode(props.incorrect_answers[i] || props.correct_answer),
                selectAnswer: selectAnswer
            })
        }

        const shuffledAnswers = []

        function shuffleAnswers () {
            const initAnswersArray = answersArray.length

            function extractRandAnswer() {
                return answersArray.splice(Math.floor(Math.random() * answersArray.length), 1)
            }

            for (let i = 0; i < initAnswersArray; i++) {
                shuffledAnswers.push(...extractRandAnswer())
            }
        }
        shuffleAnswers()
        return shuffledAnswers
    }

 

    function selectAnswer(id) {
        console.log(id)
    }

    const answerElements = answers.map(answer => {
        return (
            <Answer
                id={answer.id}
                key={answer.key}
                isSelected={answer.isSelected}
                isCorrect={answer.isCorrect}
                answer={answer.answer}
                selectAnswer={()=>answer.selectAnswer(answer.id)}
            />
        )
    })

    return (
        <div className='question-container'>
            <span className='question'>{decode(props.question, { level: 'html5' })}</span>
            <section className='answer-container'>
                {answerElements}
            </section>
        </div>
    )
}