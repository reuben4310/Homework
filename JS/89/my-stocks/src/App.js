
import './App.css';
import React from 'react';
import Stocks from './Stocks';
import { BrowserRouter, Route } from 'react-router-dom';
// import CompanyDetails from './CompanyDetails';



export default function App() {
  return (
    <div>
      <header>
        <h1>Site!!!</h1>
      </header>
      <hr />

      

      <BrowserRouter>
        <Route exact path="/" >

          <Stocks />
        </Route>
        {/* <Route path="/:companyId" >

          <CompanyDetails />
        </Route> */}

      </BrowserRouter>
    </div>

  );
}

