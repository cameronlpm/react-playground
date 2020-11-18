import React, { useState } from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {

    const [name, setName] = useState("Pancake");
    const message = 'meow';

  return (
    <div>
      <CreateTweet />
      <TweetList setName={setName} name={name} message={message} />
    </div>
  );
}

export default App;
