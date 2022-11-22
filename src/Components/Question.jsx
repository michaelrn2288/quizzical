import React from 'react'
import './Question.css'

export default function Question(props) {
    return (
        <div className='question-container'>
            <span className='question'>{atob(props.question)}</span>
            <section className='answer-container'>
                <div className='answer'>{atob(props.correct_answer)}</div>
                <div className='answer'>{props.incorrect_answers[0] && atob(props.incorrect_answers[0])}</div>
                <div className='answer'>{props.incorrect_answers[1] && atob(props.incorrect_answers[1])}</div>
                <div className='answer'>{props.incorrect_answers[2] && atob(props.incorrect_answers[2])}</div>
                <div className='answer'>{props.incorrect_answers[3] && atob(props.incorrect_answers[3])}</div>
            </section>
        </div>
    )
}