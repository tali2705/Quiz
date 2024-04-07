import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const Questions = () => {
    const [questionIndex, setQuestionIndex] = useState(0);//number
    const [result, setResult] = useState(0);//number
    const [quiz, setQuiz] = useState([]);//array
    const [loading, setLoading] = useState(true);//boolean
    const [selectedAnswer, setSelectedAnswer] = useState('');

    //loading method
    useEffect(() => {
        getQnA();
        // console.log(quiz);
    }, []);

    //gettin json
    const getQnA = async () => {
        const url = "../../json/questions.json";
        const response = await axios.get(url);
        try {
            setQuiz(response.data);
            // console.log(response.data);
            setLoading(false);

        } catch (err) {
            <h2>Ooops. There is something wrong with getting json file. Please try again later!</h2>
        }

    }

    const handleShowResult = (result) => {
        // let resultType = typeof (result);
        // console.log("Result type: ", resultType);
        console.log(`Vas rezultat je: ${result}/${quiz.length}`);

    }
    if (questionIndex === quiz.length) {
        return <input type='button' value='Vidi rezultat' onClick={handleShowResult} />;
    }

    const handleUpdateQnA = (selectedAnswer) => {
        setQuestionIndex(questionIndex + 1);
        const correctAnswer = quiz[questionIndex].correctAnswer;
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



    // console.log("Quiz Array: ", quiz);

    if (loading) {
        return <Spinner />;
    }
    return (
        <>
            <div>
                <h1>Quiz</h1>
                <hr />
                <div>
                    <h2>Question number {quiz[questionIndex].id}: {quiz[questionIndex].question}</h2>
                    {quiz[questionIndex].answer.map((selectedAnswer, k) => {
                        return (
                            <ul key={k}>
                                {/* <input type="button" value={selectedAnswer} onClick={handleUpdateQnA} /> */}
                                <li onClick={() => handleUpdateQnA(selectedAnswer)}>{selectedAnswer}</li>
                            </ul>
                        );
                    })}
                </div>

            </div >

        </>
    );
}
export default Questions;