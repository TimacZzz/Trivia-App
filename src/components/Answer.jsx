export default function Answers(props){
    let renderResult;

    // Display the questions normally
    if (!props.showResult){
        renderResult = (
            <>
                <input type="radio" name={`question${props.qIndex + 1}`} value={props.aIndex} id={`question${props.qIndex + 1}-answer${props.aIndex + 1}`} required/> 
                <label htmlFor={`question${props.qIndex + 1}-answer${props.aIndex + 1}`}>{props.answer}</label>
            </>
        )
    }
    // After the answers are submitted, display the result
    else{
        if (props.aIndex !== props.correctAnswerIndex){
            // Style for the labels that are not the correct answer
            const styles = {
                color: "rgba(41, 50, 100, 0.4)",
                // Change the bk to pinkish if it's chosen by the user
                backgroundColor: props.aIndex === props.selectedAnswerIndex && "#F8BCBC"
            }

            renderResult = (
                <>
                    <input type="radio" name={`question${props.qIndex + 1}`} value={props.aIndex} id={`question${props.qIndex + 1}-answer${props.aIndex + 1}`} required disabled/> 
                    <label htmlFor={`question${props.qIndex + 1}-answer${props.aIndex + 1}`} style={styles} className="disable">{props.answer}</label>
                </>
            )
        }
        else{
            // Style for the labels that is the correct answer
            const styles = {
                backgroundColor: "#94D7A2"
            }

            renderResult = (
                <>
                    <input type="radio" name={`question${props.qIndex + 1}`} value={props.aIndex} id={`question${props.qIndex + 1}-answer${props.aIndex + 1}`} required disabled/> 
                    <label htmlFor={`question${props.qIndex + 1}-answer${props.aIndex + 1}`} style={styles} className="disable">{props.answer}</label>
                </>
            )
        }

    }

    return (
        renderResult
    )
}