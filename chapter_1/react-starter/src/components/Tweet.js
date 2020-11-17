import React from 'react';

function Tweet(props) {
    console.log(props);
    return (
        <div className="tweet">
            <h2>Name: {props.name}</h2>
            <h3>{props.message}</h3>
            <button>Like</button>
            <button>Delete</button>
        </div>
    );
}

export default Tweet;