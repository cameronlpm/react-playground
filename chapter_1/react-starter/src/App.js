import React from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {

  const name = "Pancake";
  const message = "rolled around on the floor today";
  
  const sayHelloHandler = () => {
    console.log(`hello`);
  };

  return (
    <div>
      <h1>456</h1>
      <CreateTweet />
      <TweetList name={name} message={message} />
      <h1>Hello React</h1>
      <button onClick={sayHelloHandler} >Click</button>
    </div>
  );
}

export default App;
