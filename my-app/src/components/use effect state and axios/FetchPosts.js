import axios from "axios";
import { useState, useEffect } from "react";

function FetchPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data);
            }
            catch(error){
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }

        fetchData();

    }, []);

    if(loading){
        return <h2>Loading data...</h2>
    }
    if(error){
        return <h2 style={{color:'red'}}>Error in fetching data</h2>
    }

    return posts.map(item => {
        return <Post posData={item}/>
    });

}

const Post = (props) => {
    const posData = props.posData;
    return <div>

        <h3>{posData.title}</h3>
        <p>{posData.body}</p>
    </div>
}

export default FetchPosts;