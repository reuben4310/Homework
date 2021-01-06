
import React from 'react';
import './blogList.css';
// import { } from 'react-router-dom';

export default  (props) => {
  
  const togglePost= () => {
    console.log("toggle")
  }

  
  

  return (
  
    <div className="blog" onClick={togglePost}>
   
            <div className="title">{props.blog.name}</div>
            <div className="website">{props.blog.website}</div>
            <div className="company">
              <div>{props.blog.company.name}</div>
              <div>{props.blog.company.catchPhrase}</div>
              <div>{props.blog.company.bs}</div>
            </div>
          </div>)

  }

