import React from 'react';
import Tweet from './Tweet';

function TweetList({ name, message }) {
    return (
        <div className="tweet-list">
            <Tweet name={name} message={message} />
            <Tweet />
            <Tweet />
        </div>
    );
}

export default TweetList;