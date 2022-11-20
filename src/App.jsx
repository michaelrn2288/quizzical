import { useState } from 'react'
import './App.css'
import yellowOrnament from './assets/yellow-ornament.png'
import blueOrnament from './assets/blue-ornament.png'

export default function App() {

  function consoleLogAPI () {
    fetch('https://opentdb.com/api.php?amount=5')
        .then(response => {
            if (!response.ok) {
                throw new Error (`HTTP error: ${response.status}`)
            }
            return response.json()
        })
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

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