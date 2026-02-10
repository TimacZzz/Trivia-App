import { useState } from 'react'
import Menu from "./components/Menu.jsx"
import Quiz from "./components/Quiz.jsx"
import getQuestions from './utils/getQuestions.js'

export default function App() {
  // States
  const [gameStart, setGameStart] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);

  async function startGame(){
    // Retrieve the questions and update state
    const questions = await getQuestions();
    setGameStart(true);
    setQuestions(questions);
  }

  function handleSubmit(e){
    // Collect users' answers from the form
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Array.from(formData.entries());
    const selectedIndex = entries.map(entry => parseInt(entry[1]));

    // Update the state
    setQuestions(prevQuestions => {
      return prevQuestions.map((question, index) => {
        return {
          ...question,
          selected_answer_index: selectedIndex[index]
        }
      })
    });

    setShowResult(true);

    // Reset the form
    e.target.reset();
  }

  // Restart the game
  async function handleRestart(){
    setQuestions(await getQuestions());
    setShowResult(false);
  }

  // Conditionally render the two components
  return (
    <>
      {!gameStart && <Menu func={startGame}/>}
      {gameStart && <Quiz questions={questions} handleSubmit={handleSubmit} showResult={showResult} handleRestart={handleRestart}/>}
    </>
  )
}

