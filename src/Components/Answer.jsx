import React from 'react'
import './Answer.css'

export default function Answer(props) {

    const styleCorrectAnswer = {
        backgroundColor: 'var(--green)',
        borderColor: 'var(--green)'
    }

    const styleWrongAnswer = {
        backgroundColor: 'var(--red-light)',
        borderColor: 'var(--red-light)'
    }

    return (
        <div
            style={props.quizEnded && props.isSelected && !props.isCorrect && styleWrongAnswer ||
                props.quizEnded && props.isCorrect && styleCorrectAnswer ||
                {}
             }
            className={`answer ${props.isCorrect && 'correct-answer'} ${props.isSelected && 'selected'}`}
            onClick={() => props.selectAnswer(props.id)}
        >
            {props.answer}
        </div>
    )
}