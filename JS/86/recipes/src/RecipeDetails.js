import './RecipeDetails.css';
import React, { useState } from 'react';
import BulletLessList from './BulletLessList';

export default function RecipeDetails(props) {
  'use strict';
  const [imageShowing, setImageShowing] = useState(true);
  const { name, ingredients, directions, picture } = props.recipe;


  const togglePicture = () => {
    setImageShowing(!imageShowing);

  };

  function getPictureElem(picture, name) {
  
    if (imageShowing) {
      return <img className="img-fluid img-thumbnail img" src={picture} alt={name} />
    }
    return null;
  }

  const text = imageShowing ? 'hide' : 'show';

  return (
    <div>
      <h2>{name}</h2>
      {/*pictureElem*/getPictureElem(picture, name)}
      <br />
      <button onClick={togglePicture}>
        {text} picture
        </button>
      <h3>ingredients</h3>
      <BulletLessList list={ingredients} />
      <h3>directions</h3>
      <BulletLessList list={directions} />
    </div>
  )
}

