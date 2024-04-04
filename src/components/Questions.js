import { useEffect, useState } from "react";
import axios from "axios";
const Questions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        const url = "../../json/questions.json";
        try {
            const response = await axios.get(url);
            setQuestions(response.data);
            console.log(response);

        } catch (err) {
            <h2>Ooops. There is something wrong with getting json file. Please try again later!</h2>
        }
    }

    return (
        <>
            <h1>Quiz</h1>
            {questions.map((question) => {
                return (
                    <div key={question.id}>
                        <h3>Pitanje {question.id}: {question.question}</h3>
                        <div>a. {question.A}</div>
                        <div>b. {question.B}</div>
                        <div>c. {question.C}</div>
                        <hr />
                    </div>
                );
            })}








        </>
    );
}
export default Questions;