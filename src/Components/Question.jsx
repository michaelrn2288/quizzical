import React from 'react'
import Answer from './Answer'
import './Question.css'
import { decode } from 'html-entities'

export default function Question(props) {

    const answerElements = [<Answer correct_answer={decode(props.correct_answer, { level: 'html5' })} key='0' />]
    for (let i = 0; i < props.incorrect_answers.length; i++) {
        answerElements.push(
        <Answer
            incorrect_answers={decode(props.incorrect_answers[i], { level: 'html5' })}
            key={i + 1}
        />
        )
    }

    return (
        <div className='question-container'>
            <span className='question'>{decode(props.question, { level: 'html5' })}</span>
            <section className='answer-container'>
                {answerElements}
            </section>
        </div>
    )
}