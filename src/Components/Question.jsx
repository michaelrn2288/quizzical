import React from 'react'
import './Question.css'

export default function Question(props) {
    return (
        <div className='question-container'>
            <span className='question'>Question n1</span>
            <section className='answer-container'>
                <div className='answer'>answer 1</div>
                <div className='answer'>answer 2</div>
                <div className='answer'>answer 3</div>
                <div className='answer'>answer 4</div>
                <div className='answer'>answer 5</div>
            </section>
        </div>
    )
}