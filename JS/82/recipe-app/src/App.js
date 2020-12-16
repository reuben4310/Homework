import logo from './logo.svg';
import kugel from './kugel.png';
import './App.css';
import Recipe from './recipe';
import Details from './RecpieDetails';
import React, { Component } from 'react';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Kugel',
        details: {
          name: 'Potato Kugel',
          instructions: 'Mix eggs & potatoes',
          img: < img src={kugel} alt="kugel" />
        }
      },
      {
        id: 2,
        name: 'Herring',
        details: {
          name: 'Salted Herring',
          instructions: 'Mix eggs & salted fish',
          img: < img src={logo} className="App-logo" alt="logo" />


        }
      }
    ],
    currentRecipe: this.state.recipes[0]
  };

  getRecipeElements() {
    return this.state.recipes.map((recipe, index) => <Recipe recipe={recipe} key={recipe.id /*index*/} />);
  }

  render() {


    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Choose <code>src/Recipe.js</code> and save your recipe.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {this.getRecipeElements()}
        <Details details={this.state.currentRecipe.details} />
      </div>
    );
  }
}

export default App;