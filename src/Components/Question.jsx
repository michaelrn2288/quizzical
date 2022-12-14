import React from 'react'
import Answer from './Answer'
import './Question.css'
import { decode } from 'html-entities'

export default function Question(props) {

    const [answers, setAnswers] = React.useState(createAnswers())

    function createAnswers() {
        const answersArray = []
        for (let i = 0; i < props.incorrect_answers.length + 1; i++) {
            answersArray.push({
                id: i,
                key: i,
                isSelected: false,
                isCorrect: props.incorrect_answers[i] ? false : true,
                answer: decode(props.incorrect_answers[i] || props.correct_answer),
            })
        }

        const shuffledAnswers = []

        function shuffleAnswers() {
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
        setAnswers(
            answers.map(answer => {
                return answer.id === id ?
                    { ...answer, isSelected: true } :
                    { ...answer, isSelected: false }
            })
        )
    }

    function checkAnswers() {
        props.setRightAnswers(prevState => {
            return answers.map(answer => answer.isCorrect && answer.isSelected).includes(true) ?
                prevState + 1 :
                prevState
        })
    }

    React.useEffect(() => {
        props.checkAnswer && checkAnswers()
    }, [props.quizEnded])

    const answerElements = answers.map(answer => {
        return (
            <Answer
                id={answer.id}
                key={answer.key}
                isSelected={answer.isSelected}
                isCorrect={answer.isCorrect}
                answer={answer.answer}
                selectAnswer={selectAnswer}
                quizEnded={props.quizEnded}
            />
        )
    })

    return (
        <div className='question-container'>
            <div className='question'>{decode(props.question, { level: 'html5' })}</div>
            <section className='answer-container'>
                {answerElements}
            </section>
        </div>
    )
}