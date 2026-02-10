import he from "he"
import getRandomIndex from "./getRandomIndex";

export default async function getQuestions(){
    // Retrieve data from Open Trivia DB
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple");
    const data = await response.json();
    const rawQuestions = data.results;

    // Process the data
    const processedQuestions = rawQuestions.map((question) => {
        // Generate a random index & insert the correct answer into the answer array
        const randomIndex = getRandomIndex(question.incorrect_answers.length);
        const rawAnswers = question.incorrect_answers;
        rawAnswers.splice(randomIndex, 0, question.correct_answer);

        // Decode the html entities in answer array and the question
        const processedAnswers = rawAnswers.map(answer => he.decode(answer));
        const processedQuestion = he.decode(question.question);

        // Construct object
        return {
            question: processedQuestion,
            answers: processedAnswers,
            correct_answer_index: randomIndex,
            selected_answer_index: -1
        }
    });

    return processedQuestions;
}