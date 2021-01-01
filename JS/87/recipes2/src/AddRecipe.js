import React, { Component } from 'react';

export default class AddRecipe extends Component {
    state = {
        name: '',
        ingredients: '',
        directions: '',
        picture: ''
    };


    handleChange = e => {

    }

    render() {
        return (
            <div style={{ margin: 'auto', textAlign: 'center' }}>
                <h1>PCS Class</h1>
                <form>
                    Name: <input name="name" value={this.state.name} onChange={this.handleChange} />
          Ingredients: <input name="ingredients" value={this.state.ingredients} onChange={this.handleChange} />
          Directions: <input name="directions" value={this.state.directions} onChange={this.handleChange} />
          Picture: <input name="picture" value={this.state.picture} onChange={this.handleChange} />
                    <button onSubmit={this.handleChange}>Submit!</button>
                </form>
            </div>
        )
    }
}