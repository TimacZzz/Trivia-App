import { useState } from 'react'
import Menu from "./components/Menu.jsx"
import Quiz from "./components/Quiz.jsx"
import getQuestions from './utils/getQuestions.js'

export default function App() {
  const [arr, setArr] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [questions, setQuestions] = useState([]);

  async function startGame(){
    const questions = await getQuestions();
    setGameStart(true);
    setQuestions(questions);
    // setArr(questions.map(element => <h1>{element}</h1>));
  }

  return (
    <>
      {!gameStart && <Menu func={startGame}/>}
      {gameStart && <Quiz questions={questions}/>}
    </>
  )
}

