import React, { useState } from 'react'
import './App.css'
import yellowOrnament from './assets/yellow-ornament.png'
import blueOrnament from './assets/blue-ornament.png'
import Question from './Components/Question'

export default function App() {

  const [questions, setQuestions] = React.useState()
  const [quizWillStart, setQuizWillStart] = React.useState(false)
  const [quizStarted, setQuizStarted] = React.useState(false)
  const [quizEnded, setQuizEnded] = React.useState(false)

  const questionsElements = questions && questions.map((question, index) => {
    return (
      <Question
        question={question.question}
        correct_answer={question.correct_answer}
        incorrect_answers={question.incorrect_answers}
        key={index}
        id={index}
        quizEnded={quizEnded}
      />)
  })

  function startQuiz() {
    setQuizWillStart(prevState => !prevState)
    setTimeout(() => {
      setQuizStarted(prevState => !prevState)
      setQuizWillStart(prevState => !prevState)
    }, 600)
  }

  function checkAnswers() {
    setQuizEnded(true)
  }

  function playAgain() {
    console.log('play again')
  }

  function getQuestionsFromAPI() {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log(data.results)
        setQuestions(data.results)
      })
      .catch(error => console.error(error))
  }

  return (
    <div>
      <main>
        {
          !quizStarted && !quizEnded &&
          <div className={`initial-screen ${quizWillStart && 'will-fade'} `} >
            <h1>Quizzical</h1>
            <div className='instructions'>Take a quiz and try to correctly answer the questions!</div>
          </div>
        }
        {quizStarted && questionsElements}

        <button onClick={() => {
          !quizStarted && !quizEnded && startQuiz()
          !quizStarted && !quizEnded && getQuestionsFromAPI()
          quizStarted && checkAnswers()
          quizEnded && playAgain()
        }}>
          {`${!quizStarted && !quizEnded && 'Start quiz' ||
            quizStarted && 'Check answers' ||
            quizEnded && 'Play again'
            }`}
        </button>

      </main>


      <img src={yellowOrnament} className='yellow-ornament' />
      <img src={blueOrnament} className='blue-ornament' />
    </div>
  )
}