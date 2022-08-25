import React from 'react';
import {nanoid} from 'nanoid';

export default function Question(props) {

    const answerBtn = props.data.answers.map(answer => (
    <button className="answer-btn" key={nanoid()} onClick={props.handleClick}>{answer.ans}</button>
    ))
    return (
        <div className='question--container'>
            <p className="question--text">{props.question}</p>
            {answerBtn}
        </div>
    )
}