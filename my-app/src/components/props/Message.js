import { useState } from "react";

function Message(props){
    return <div>
        <p>{props.message}</p>
        <hr></hr>
    </div>
}

export default Message;