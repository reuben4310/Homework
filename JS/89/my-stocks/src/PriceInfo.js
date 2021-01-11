
import React, { useState, useEffect } from 'react';
// import './blogList.css';
// import { } from 'react-router-dom';

export default (props) => {
    // const [company, setCompany] = useState();
     const [price, SetPrice] = useState();
    useEffect(() => {
        (async () => {
            try {

           
                // setInterval(async () => {
                    const response = await fetch(`https://api-v2.intrinio.com/securities/${props.details}/prices/realtime?api_key=OjNmYWE3NzA3ZTgyMGZiMDhlNDMwZGJlNWM5NjU4YWJk`)
                               
                    if (!response.ok) {
                        throw new Error(`${response.status}: ${response.statusText}`);
                    }
                    const p = await response.json();
                    SetPrice(p);
                // }, 3000);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [props.details]);


    

    const thePrice = price ? <div className="blog">

        <div className="title">{price.last_price}</div>
        <div className="website">{price.last_time}</div>


    </div> : null;


    return (
    
        thePrice
    )

}

