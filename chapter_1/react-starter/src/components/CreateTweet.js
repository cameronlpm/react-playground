import React, { useState } from 'react';

function CreateTweet() {
    // State
    const [textInput, setTextInput] = useState("");

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }

    return (
        <form>
            <textarea value={textInput} onChange={userInputHandler} cols="30" rows="5"></textarea>
            <button>Submit</button>
        </form>
    );
}

export default CreateTweet;