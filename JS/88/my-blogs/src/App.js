
import './App.css';
import React from 'react';
import  Blogs  from './Blogs';
import {BrowserRouter,Route} from 'react-router-dom';
import Posts from './Posts';


export default function App() {
  return (
    <div>
      <header>
       <h1>Blog Site!!!</h1>
      </header>
      <hr/>

       <BrowserRouter>
        <Route exact path="/" >
          
        <Blogs />
      </Route>
        <Route path="/:userId" >

          <Posts />
        </Route>
      
      </BrowserRouter>
    </div>

  );
}
// export default App;
