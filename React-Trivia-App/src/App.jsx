import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import he from 'he';
import Button from './Button.jsx';
import Question from './Question.jsx';

export default function App() {

    const [playingQuiz, setPlayingQuiz] = useState(false)
    const [questions, setQuestions] = useState([])

    useEffect(function() {
        fetch("https://opentdb.com/api.php?amount=4&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data.results.map(item => ({...item, id : nanoid()}))))
    }, [])
        
    function startQuiz() {
        setPlayingQuiz(oldPlay => !oldPlay);
    }

    const cards = questions.map(card => (
        <Question 
            question={he.decode(card.question)} 
            key={card.id}
            correctAnswer={card.correct_answer}
            incorrectAnswers={card.incorrect_answers} 
        />
    ))

    console.log(questions);

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
                    {cards}
                </div>
            }
        </div>
    )
}