import React from 'react';

export default function Details(props) {
    'use strict';
    return (

        <>
            <h1>{props.weather.name}</h1>
            <h2>{props.weather.description}</h2>
            <img src={props.weather.imgSrc} />
        </>
    );
}