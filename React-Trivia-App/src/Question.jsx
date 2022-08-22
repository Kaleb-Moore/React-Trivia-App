import React from 'react';
import {nanoid} from 'nanoid';

export default function Question(props) {

    const answers = [props.correctAnswer, ...props.incorrectAnswers];
    console.log(answers)

    const answerBtn = answers.map(answer => (
        <button className="answer-btn" key={nanoid()}>{answer}</button>
    ))
    return (
        <div className='question--container'>
            <p className="question--text">{props.question}</p>
            {answerBtn}
        </div>
    )
}