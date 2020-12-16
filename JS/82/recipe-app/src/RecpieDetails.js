import React from 'react';

export default function Details(props) {
    'use strict';
    return (

        <>
            <h3>{props.details.name}</h3>
            instructions
            <h3>{props.details.instructions}</h3>
            {props.details.img}
        </>
    );
}
