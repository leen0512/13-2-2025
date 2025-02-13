import { useEffect, useState } from "react";

function OnMount(props){
    useEffect( () => {
        console.log("The component is loading..")
    }, [])

    return <div>OnMount Component Loaded</div>;
}

export default OnMount;