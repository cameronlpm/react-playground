import React from 'react';
import Tweet from './Tweet';

function TweetList({ name, message, setName }) {
    return (
        <div className="tweet-list">
            <Tweet name={name} message={message} />
            <Tweet />
            <Tweet />
            <button onClick={() => setName("Uni")}>Click</button>
        </div>
    );
}

export default TweetList;