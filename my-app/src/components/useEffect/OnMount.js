import { useEffect, useState } from "react";

function OnMount(){
    useEffect( () => {
        console.log("The component is loading..")
    }, [])

    return <div>OnMount Component Loaded</div>;
}

export default OnMount;