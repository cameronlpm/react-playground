import React from 'react';
import Tweet from './components/Tweet';
import CreateTweet from './components/CreateTweet';

function App() {
  const name = "Pancake";
  let message = "this is the raw tweet literal";

  return (
    <div>
      <h1>456</h1>
      <CreateTweet />
      <Tweet name={name} message={message}/>
    </div>
  );
}

export default App;
