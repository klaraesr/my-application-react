import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
import './App.css';
import './App.css';
import travis from './travisfil.png'; 
import scriptjson from './scriptjson.png'; 

function App() {
  let [correctCode, setCorrectCode] = useState(false)

  useEffect(() => {
    easterEgg()
  }, [])

  let easterEgg = () => {
    const allowedKeys = {
      68: 'd',
      69: 'e',
      86: 'v',
      79: 'o',
      80: 'p',
      83: 's'
    };
    // devops sequence
    const code = ['d', 'e', 'v', 'o', 'p', 's'];

    // a variable to remember the 'position' the user has reached so far.
    let codePosition = 0;

    // add keydown event listener
    document.addEventListener('keydown', function(e) {
      // get the value of the key code from the key map
      let key = allowedKeys[e.keyCode];
      // get the value of the required key from the konami code
      let requiredKey = code[codePosition];

      // compare the key with the required key
      if (key === requiredKey) {
        let pass = "*".repeat(codePosition + 1)
        console.clear()
        console.log(pass)
        // move to the next key in the konami code sequence
        codePosition++;
        // if the last key is reached, activate egg
        if(codePosition === code.length) {
          setCorrectCode(true)
          codePosition = 0
        }
      } else {
        codePosition = 0
        console.clear()
      }
    })
  }
  
  if(correctCode) {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{margin: 0}}> 
          Congratulations, you have found our easter egg!
        </h2>
        <p style={{width:900, margin: 10}}>Did you find the CI/CD part interesting? Good, because here comes a bonus section! Travis CI can also provide you with information about the code coverage in your application, and it is really simple to integrate it with your project. </p>
        <p style={{width:900, margin: 10, fontWeight: 100}}>First, you need to update your package.json file with the test:coverage script, showed in the picture below.</p>
        <img src={scriptjson} alt={"package.json"} ></img>
        <p style = {{width:900, fontWeight: 100}}>After that, you need to add the coverage to the .travis.yml file. </p>
        <img src={travis} alt={"Travis config"}></img>
        <p style = {{width:900, fontWeight: 100}}>This allows you to get information about your code coverage when building the application. Code coverage is important in DevOps, since it helps with identifying untested code and in that way improving the quality of the software. If you have a lot of code that is not being tested, you want to increase your code coverage so that you can be more confident that the code work as it should. With this information provided by Travis, you can improve your application even more. </p>
      </header>
    </div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Successfully deployed with Google App Engine!
        </p>
        <p className="Hint">
          Would you like to know more? Try typing the correct keyword...
        </p>
      </header>
    </div>
  );
}
export default App;