import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import './blogList.css';

export default () => {
  const [blogs, setBlogs] = useState([]);
  

  useEffect(() => {
    (async () => {
      try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const users = await response.json();

        setBlogs(users);

      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  const blogList = blogs.length ? blogs.map(r => {
    return <li><Link to={`/${r.id}`}><BlogDetails blog={r} key={r.id} /></Link></li>
    

  }) : null
  
  return (
    <ul>

      {blogList}
      

    </ul>

  )
}
