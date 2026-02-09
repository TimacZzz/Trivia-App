export default function Quiz(props){
    const questions = props.questions;
    const questionsArr = questions.map((question, qIndex) => {
        const answersArr = question.answers.map((answer, aIndex) => {
            return (
                <>
                    <input type="radio" name={`question${qIndex + 1}`} value={aIndex} id={`question${qIndex + 1}-answer${aIndex + 1}`}/> 
                    <label htmlFor={`question${qIndex + 1}-answer${aIndex + 1}`}>{answer}</label>
                </>
            )
        })

        return (
            <div className="question-container">
                <h2 className="question">{question.question}</h2>
                <div className="answers-container">
                    {answersArr} 
                </div>
            </div>
        )
    })

    return (
        <section id="quiz">
            <div className="questions-container">
                <form>
                    {questionsArr}
                </form>
                <button id="check-answer-btn">Check Answers</button>
            </div>
        </section>
    )
}