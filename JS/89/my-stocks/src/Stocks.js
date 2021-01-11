import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';
import PriceInfo from './PriceInfo';

// import './blogList.css';

export default () => {
  const [stocks, setStocks] = useState([]);
  const [company, setCompany]=useState();
  const [price, SetPrice] = useState([]);

  useEffect(() => {
    (async () => {
      try {

        const response = await fetch('https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=OjNmYWE3NzA3ZTgyMGZiMDhlNDMwZGJlNWM5NjU4YWJk')

        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const s = await response.json();

        setStocks(s);

      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const toggleInfo = (company,price) => {
    console.log("toggle")
    setCompany(company);
    SetPrice(price)
    
    
  }

  const stockList = stocks ? stocks.companies ? stocks.companies.map(r => {
    return <li key={r.id} onClick={(e)=>{toggleInfo(r)}}>{r.name}</li>
    

    //<Link to={`/${r.id}`}><BlogDetails blog={r} key={r.id} /></Link> 
  }) : null : null;
  const theCompany = company ? <CompanyDetails stock={company} /> : null;
  const thePrice=price ? <PriceInfo details={price}/> :null;
  return (
    <>
    <ul>
      {stockList}
    </ul>
    {theCompany}
    <div>
    {thePrice}
    </div>
    </>

  )
}
