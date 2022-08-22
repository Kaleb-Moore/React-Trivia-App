import React, {useState, useEffect} from 'react';
import Button from './Button.jsx';

export default function App() {

    const [playingQuiz, setPlayingQuiz] = useState(false)

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
                <h1>Playing Quiz</h1>
            }
        </div>
    )
}