import React from 'react'
import yellowOrnament from '../assets/yellow-ornament.png'
import blueOrnament from '../assets/blue-ornament.png'


export default function Quizz() {
    return (
        <div>
            <main>
                <h1>Quizzical</h1>
            </main>

            <img src={yellowOrnament} className='yellow-ornament' />
            <img src={blueOrnament} className='blue-ornament' />
        </div>
    )
}