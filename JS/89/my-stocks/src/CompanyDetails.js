
import React, { useState, useEffect } from 'react';
// import './blogList.css';
// import { } from 'react-router-dom';

export default (props) => {
  const [company, setCompany] = useState();
  // const [price, SetPrice] = useState();
  useEffect(() => {
    (async () => {
      try {

        const response = await fetch(`https://api-v2.intrinio.com/companies/${props.stock.ticker}?api_key=OjNmYWE3NzA3ZTgyMGZiMDhlNDMwZGJlNWM5NjU4YWJk`)
        
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const c = await response.json();

        setCompany(c);
       
      } catch (err) {
        console.error(err);
      }
    })();
  }, [props.stock]);


  const theCompany = company ? <div className="blog">

    <div className="title">{props.stock.ticker}</div>
    <div className="website">{props.stock.name}</div>
    <div className="details">{company.short_description}</div>

  </div> : null;

 


  return (
    theCompany
    
  )

}

