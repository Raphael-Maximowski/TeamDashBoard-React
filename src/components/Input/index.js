import './style.css'
import {useState} from "react";
const Input = (props) => {

    const typing = (event) =>  {
        props.changeState(event.target.value)
    }
    return (
        <div className="input">
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} required={props.required} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;