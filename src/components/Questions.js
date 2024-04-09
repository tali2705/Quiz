import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";



const Questions = () => {
    //STATES
    const [questionIndex, setQuestionIndex] = useState(0);//number
    const [result, setResult] = useState(0);//number
    const [quiz, setQuiz] = useState([]);//array
    const [loading, setLoading] = useState(true);//boolean
    const [selectedAnswer, setSelectedAnswer] = useState('');//string
    const [showResult, setShowResult] = useState(false);//bool


    //loading method
    useEffect(() => {
        getQnA();
    }, []);


    //gettin json method
    const getQnA = async () => {
        const url = "../../json/questions.json";
        try {
            const response = await axios.get(url);
            setQuiz(response.data);
            // console.log(response.data);
            setLoading(false);

        }
        catch (err) {
            console.error("Error fetching questions:", err);
        }

    }


    //Method for matching answers to correct ones and for changing the questions
    const handleUpdateQnA = (selectedAnswer) => {

        const correctAnswer = quiz[questionIndex].correctAnswer;
        //first condition, setting it to increment arrays index if it's still smaller than quiz's length, that way it won't return error after the last question has been answered, showResult is still false so it will show second UI, which is the actual quiz
        if (questionIndex + 1 < quiz.length) {
            setQuestionIndex(questionIndex + 1);
        }
        else {//when array index becomes same as arrays length, we will set showResult to be true, so that result can be shown on our    UI
            setShowResult(true);
        }
        //second condition, for updating result
        if (correctAnswer === selectedAnswer) {
            setSelectedAnswer(true);
            setResult(result + 1);
            console.log("correctAnswer: ", quiz[questionIndex].correctAnswer);
            console.log("selectedAnswer: ", selectedAnswer);
            console.log("Answer: Right");
        }
        else {
            setSelectedAnswer(false);
            console.log("correctAnswer: ", quiz[questionIndex].correctAnswer);
            console.log("selectedAnswer: ", selectedAnswer);
            console.log("Answer: Wrong");
        }
    };
    const handleReset = () => {
        window.location.reload();
    }

    if (loading) {
        return <Spinner />;
    }

    // console.log("Index pitanja: ", questionIndex);
    // console.log("Duzina niza: ", quiz.length);


    //RENDERING UI WITH IF STATEMENT, IF SHOW RESULT RETURNS TRUE(IF ALL THE QUESTIONS ARE ANSWERED SHOWRESULT IS SET TO TRUE)
    if (showResult) {
        return (
            <div className="quiz-container">
                <div className="title">
                    <h1>Quiz</h1>
                </div>
                <div className="question-container">
                    Došli ste do kraja kviza! Vaš rezultat je:
                </div>
                <div className="result">{result}/{quiz.length}
                </div>

                <button
                    className="btn"
                    onClick={handleReset}>
                    Pokušaj opet
                </button>

            </div>
        );
    }
    //IF NOT, THEN SHOW QUIZ
    else {
        return (
            <div className="quiz-container">
                <div className="title">
                    <h1>Quiz</h1>
                </div>
                <div className="question-container">
                    <h2>Pitanje broj {quiz[questionIndex].id}: {quiz[questionIndex].question}</h2>
                </div>
                <div>
                    {
                        quiz[questionIndex].answer.map((selectedAnswer, k) => {
                            return (
                                <ul key={k}>
                                    <li onClick={() => handleUpdateQnA(selectedAnswer)}>{selectedAnswer}</li>
                                </ul>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

}
export default Questions;
