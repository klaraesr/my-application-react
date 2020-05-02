import React, { useState } from 'react';
import './App.css';

const buttonStyleBlue = {
    backgroundColor: 'blue',
    minHeight: '50vh', 
    minWidth: '200vh'
}
const buttonStyleRed = {
  backgroundColor: 'red',
    minHeight: '50vh', 
    minWidth: '200vh'
}
function App() {
  let [style, setStyle] = useState(buttonStyleBlue)

  let handleClick = () => {
    style === buttonStyleBlue ?  setStyle(buttonStyleRed) : setStyle(buttonStyleBlue)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Successfully deployed with Google App Engine!
        </p>
      </header>
      <button
        className="btn btn-default"
        style={style}
        onClick={handleClick}>{"Click me!"}</button>
    </div>
  );
}

export default App;
