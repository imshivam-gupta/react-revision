import React, { useEffect, useState } from "react";
import axios from 'axios';

const ApiDataExample = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    },[]);

    // When to fetch posts
    const fetchPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPosts(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    

    return(
        <div>
            <h1>API Data Example</h1>
            {posts.length > 0 ? 
            
            <ul>
                {posts.map((post,index)=>(
                    <li key={index}>
                        {post.title}
                    </li>
                ))}
            </ul>
            
            : 
            
            
            <p>No posts</p>}
            
        </div>
    )
}

export default ApiDataExample;