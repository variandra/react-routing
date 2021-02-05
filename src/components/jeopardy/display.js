import React from "react";

function Display(props) {
    let data = props.data;
    if(data){
        return (
            <ul>
                <li>
                Your score: {props.score}
                </li>
                <li>
                    Category: {data.category.title}
                </li>
                <li>
                    point value: {data.value}
                </li>
                <li>
                    question: {data.question}
                </li>
                <li>
                <label htmlFor={data.id}>Answer:</label>
                <input onChange={props.handleChange} type='text' name='formData' value={props.formData} id={data.id} placeholder='DO NOT Form a question!'></input>
                </li>
                <button type="button" onClick={props.testAnswer}>test</button>
                <li>
                {data.answer}
                </li>
            </ul>
        );}
    return ''
    }

export default Display