import React, { useState } from 'react'
import './App.css'
import yellowOrnament from './assets/yellow-ornament.png'
import blueOrnament from './assets/blue-ornament.png'
import Question from './Components/Question'

export default function App() {

  const [questions, setQuestions] = React.useState([])
  const [quizWillStart, setQuizWillStart] = React.useState(false)
  const [quizStarted, setQuizStarted] = React.useState(false)
  const [quizEnded, setQuizEnded] = React.useState(false)
  const [checkAnswer, setCheckAnswer] = React.useState(false)
  const [rightAnswers, setRightAnswers] = React.useState(0)
  const [hasQuizRunned, setHasQuizRunned] = React.useState(false)

  const questionsElements = questions && questions.map((question, index) => {
    return (
      <Question
        question={question.question}
        correct_answer={question.correct_answer}
        incorrect_answers={question.incorrect_answers}
        key={index}
        id={index}
        quizEnded={quizEnded}
        checkAnswer={checkAnswer}
        setRightAnswers={setRightAnswers}
      />)
  })

  function startQuiz() {
    setQuizWillStart(true)
    setTimeout(() => {
      setHasQuizRunned(true)
      setQuizStarted(true)
      getQuestionsFromAPI()
      setQuizWillStart(false)
    }, 600)
  }

  function checkAnswers() {
    setQuizEnded(true)
    setCheckAnswer(true)
  }

  function playAgain() {
    setQuestions([])
    setQuizStarted(false)
    setQuizEnded(false)
    startQuiz()
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
        
        <div className='questions-container'>
          {quizStarted && questionsElements}
        </div>

        <div className='result-btn-container'>

          <div className='result'>
            {`${quizEnded && `You scored ${rightAnswers}/5 correct answers` || ''}`}
          </div>

          {!quizWillStart &&
            <button
              onClick={() => {
                !quizStarted && !quizEnded ? startQuiz() : undefined
                quizStarted && !quizEnded ? checkAnswers() : undefined
                quizEnded ? playAgain() : undefined
              }}

              className={`${quizStarted && 're-enter-button'}`}
            >
              {`${!quizStarted && !quizEnded && 'Start quiz' ||
                quizStarted && !quizEnded && 'Check answers' ||
                quizEnded && 'Play again'
                }`}
            </button>
          }
        </div>

      </main>

      <img src={yellowOrnament} className={`yellow-ornament ${hasQuizRunned && 'contracted'}`} />
      <img src={blueOrnament} className={`blue-ornament ${hasQuizRunned && 'contracted'}`}  />
    </div>
  )
}