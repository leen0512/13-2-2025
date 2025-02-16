import { useState, useEffect } from "react";
import axios from "axios";

function FetchUserOnMount() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
                setUser(response.data);
            }
            catch(error){
                setError("Error in fetching data")
            }
            setIsLoading(false);
        };
    }, []);

    if (isLoading) return <p>Loading data...</p>
    if (error) return <p style={{color:"red"}}>{error}</p>

    return (
        <div>
            <h2>Users Data</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default FetchUserOnMount;