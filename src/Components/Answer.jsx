import React from 'react'
import './Answer.css'

export default function Answer (props) {
    return (
        <div
        className={`answer ${props.isCorrect && 'correct-answer'} ${props.isSelected && 'selected'}`}
        onClick={()=>props.selectAnswer(props.id)}
        >
            {props.answer}
        </div>
    )
}