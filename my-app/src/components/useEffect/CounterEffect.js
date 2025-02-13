import { useEffect, useState } from "react";

function CounterEffect(props){
    useEffect( () => {
        console.log(`The number is: ${props.count1}`);
    }, [props.count1])

    return <div><p>{props.count1}</p></div>
}

export default CounterEffect;