import React from 'react'
import Answer from './Answer'
import './Question.css'

export default function Question(props) {

    const answerElements = [<Answer correct_answer={atob(props.correct_answer)} key = '0' />]
        for (let i = 0; i < props.incorrect_answers.length; i++) {
            answerElements.push(<Answer incorrect_answers={atob(props.incorrect_answers[i])} key={i + 1}
                />) 
        }
        

    return (
        <div className='question-container'>
            <span className='question'>{atob(props.question)}</span>
            <section className='answer-container'>
                {answerElements}
            </section>
        </div>
    )
}