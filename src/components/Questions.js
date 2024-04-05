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










        </>
    );
}
export default Questions;