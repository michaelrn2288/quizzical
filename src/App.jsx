import React, { useState } from 'react'
import './App.css'
import yellowOrnament from './assets/yellow-ornament.png'
import blueOrnament from './assets/blue-ornament.png'
import Question from './Components/Question'

/**
 * State quizWillStart will be used to change components class to "will-fade",
 * to add an animation of transitional disappearing.
 * 
 * setQuizWillStart will be paired with a setIterval of setQuizStarted, to gradually change effects then
 * mount/unmount components.
 */

export default function App() {

  const [quizStarted, setQuizStarted] = React.useState(false)
  const [quizWillStart, setQuizWillStart] = React.useState(false)
  const [questions, setQuestions] = React.useState([1,2,3,4,5])

  const questionsElements = questions.map(question => <Question />)

  function startQuiz() {
    setQuizWillStart(prevState => !prevState)
    setTimeout(() => {
      setQuizStarted(prevState => !prevState)
      setQuizWillStart(prevState => !prevState)
    }, 600)
  }


  function consoleLogAPI() {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json()
      })
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }

  return (
    <div>
      <main>
        {
          !quizStarted &&
          <div className={`initial-screen ${quizWillStart && 'will-fade'} `} >
            <h1>Quizzical</h1>
            <div className='instructions'>Take a quiz and try to correctly answer the questions!</div>
          </div>
        }
        {quizStarted && questionsElements}
        <button onClick={startQuiz}>Start quiz</button>
      </main>


      <img src={yellowOrnament} className='yellow-ornament' />
      <img src={blueOrnament} className='blue-ornament' />
    </div>
  )
}