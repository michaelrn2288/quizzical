import React from 'react'
import './Quizz.css'
import yellowOrnament from '../assets/yellow-ornament.png'
import blueOrnament from '../assets/blue-ornament.png'


export default function Quizz() {
    return (
        <div>
            <main>
                <h1>Quizzical</h1>
                <div className='instructions'>Take a quiz and try to correctly answer the questions!</div>
            <button>Start quiz</button>
            </main>


            <img src={yellowOrnament} className='yellow-ornament' />
            <img src={blueOrnament} className='blue-ornament' />
        </div>
    )
}