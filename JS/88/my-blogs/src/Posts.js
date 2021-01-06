import './posts.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Posts = () => {

    const [posts, setPosts] = useState();
    const { userId } = useParams();
    console.log(userId);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const posts = await response.json();
                setPosts(posts);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [userId]);
    const PostList = posts ? posts.map(r => {
        return <li post={r} key={r.id}>   <div>{r.title}</div>
            <div >{r.body}</div></li >
            
    }) : null

    return (
        <ul>
            
            {PostList}
            

        </ul>
    )
}

export default Posts;
