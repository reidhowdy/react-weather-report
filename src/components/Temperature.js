//temperature must display a numeric temperature
//must have two buttons: one to increase temp, one to decrease temp
import { useState } from 'react';

const Temperature = function() {
    const [temperature, setTemp] = useState(0);
    //setTemp is a variable that holds a function

    let textColor = "black"
    const changeTempColor = function() {
        if (temperature >=80) {
            textColor = "red"
        } else if (temperature >= 70) {
            textColor = "orange"
        } else if (temperature >= 60) {
            textColor = "yellow"
        } else if (temperature >= 50) {
            textColor = "green"
        } else {
            textColor = "teal"
        }
    }

    changeTempColor();
    //look up destructuring in JS - learning another lang lesson
    //that's what's happening above
    
    
    
    const increaseTemp = function() {
        return setTemp(temperature + 1)
    }

    const decreaseTemp = function() {
        return setTemp(temperature - 1)
    }

    return (
    <>
        <h1>Temperature</h1> 
        <p style={{ color:textColor}} >{temperature}</p>
        <button id="incButton" onClick={() => increaseTemp(temperature)}>Increase</button>
        <button id="decButton" onClick={() => decreaseTemp(temperature)}>Decrease</button>
    </>
    )
    
}

export default Temperature;