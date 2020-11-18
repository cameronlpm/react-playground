import React from 'react';

function Tweet({ name, message }) {

    return (
        <div className="tweet">
            <h2>Name: {name} </h2>
            <h3>Message: {message} </h3>
            <button>Like</button>
            <button>Delete</button>
        </div>
    );
}

export default Tweet;