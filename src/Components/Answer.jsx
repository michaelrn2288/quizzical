import React from 'react'
import './Answer.css'

export default function Answer (props) {
    return (
        <div className='answer'>
            {props.correct_answer ? props.correct_answer : props.incorrect_answers}
        </div>
    )
}