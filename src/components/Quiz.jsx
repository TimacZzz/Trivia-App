import Question from "./Question.jsx"
import Answer from "./Answer.jsx"

export default function Quiz(props){
    let numberOfCorrectAnswers = 0;
    const questions = props.questions;
    // Construct array of questions
    const questionsArr = questions.map((question, qIndex) => {
        // Check the # of correct answers
        if (question.correct_answer_index === question.selected_answer_index){
            numberOfCorrectAnswers++;
        }

        // Construct the array of answers for each question
        const answersArr = question.answers.map((answer, aIndex) => {
            return (
                <Answer 
                    key={`${qIndex}${aIndex}`} 
                    qIndex={qIndex} 
                    aIndex={aIndex} 
                    answer={answer} 
                    showResult={props.showResult} 
                    correctAnswerIndex={question.correct_answer_index}
                    selectedAnswerIndex={question.selected_answer_index}
                />
            )
        })

        return (
            <div className="question-container" key={qIndex}>
                <Question question={question.question} />
                <div className="answers-container">
                    {answersArr} 
                </div>
            </div>
        )
    })

    return (
        <section id="quiz">
            <div className="questions-container">
                <form onSubmit={props.handleSubmit}>
                    {questionsArr}
                    {!props.showResult && <button className="quiz-btn" type="submit">Check Answers</button>}
                </form>
                {props.showResult && 
                    <div className="result-container">
                        <span>You scored {numberOfCorrectAnswers}/5 correct answers</span>
                        <button className="quiz-btn" onClick={props.handleRestart}>Play Again</button>
                    </div>
                }
            </div>
        </section>
    )
}