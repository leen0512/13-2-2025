import { useState } from "react";
import axios from "axios";

function FetchOnClick() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null); // Reset error before fetching
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    
    if(isLoading) return <p>Loading Data...</p>;
    if(error) return <p>{error}</p>;

    return (
        <div>
            <button onClick={fetchData}>Fetch Posts</button>

            {posts.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}

export default FetchOnClick;
