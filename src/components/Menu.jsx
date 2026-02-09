export default function Menu(props){
    return (
        <section id="menu">
            <div className="container">
                <h1>Trivia App</h1>
                <p>How much do you really know? Let's find out!</p>
                <button id="start-btn" onClick={props.func}>Start Game</button>
            </div>
        </section>
    )
}