import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import he from 'he';
import axios from 'axios';
import Button from './Button.jsx';
import Question from './Question.jsx';

export default function App() {

    const [data, setData] = useState({});
    const [playingQuiz, setPlayingQuiz] = useState(false);

    useEffect(() =>{
        fetch("https://opentdb.com/api.php?amount=4&type=multiple")
            .then(response => response.json())
            .then(data => setData(data.results.map(item => ({
                    questions: he.decode(item.question),
                    answers: [
                    {
                        ans: he.decode(item.correct_answer),
                        isCorrect: true,
                        id: nanoid(),
                    },
                    {
                        ans: he.decode(item.incorrect_answers[0]),
                        isCorrect: false,
                        id: nanoid(),
                    },
                    {
                        ans: he.decode(item.incorrect_answers[1]),
                        isCorrect: false,
                        id: nanoid(),
                    },
                    {
                        ans: he.decode(item.incorrect_answers[2]),
                        isCorrect: false,
                        id: nanoid(),
                    }
                    ].sort(() => Math.random() - 0.5)
                }))))

        console.log(data);
    }, []);

    function startQuiz() {
        setPlayingQuiz(oldPlay => !oldPlay);
    }

    return (
        <div>
            {
                !playingQuiz
                ? 
                <div>
                    <h1>Quizzical</h1>
                    <h4>Some description if needed</h4>
                    <Button value="Start Quiz" handleClick={startQuiz}/>
                </div>
                :
                <div>
                    <Question data={data}/>
                </div>
            }
        </div>
    )
}