import { useState } from "react";

function NumberDisplay(props){
    return <div>
        <p>{props.number1}</p>
        <p>{props.number2}</p>
        <p>{props.number3}</p>
        <hr></hr>
    </div>
}

export default NumberDisplay;