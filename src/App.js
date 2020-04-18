import React, { useState } from 'react'
import './app.scss'

function App() {
  const [displayContent, setDisplayContent] = useState('')
  const numbers = [9,8,7,6,5,4,3,2,1]

  function equals() {
    setDisplayContent(String(eval(displayContent)))
  }

  function changeSignal() {
    if (displayContent[0] == '-')
      setDisplayContent(displayContent.slice(1))
    else
      setDisplayContent('-' + displayContent)
  }

  return (
    <div className="App">
      <div className="display">
        <div className="content">{displayContent}</div>
      </div>
      <div className="buttons">
        <div className="top-controls">
          <button onClick={changeSignal}>+/-</button>
          <button onClick={() => setDisplayContent('')}>C</button>
          <button onClick={() => setDisplayContent(displayContent.slice(0, -1))}><i className="fas fa-backspace"></i></button>
        </div>
        <div className="right-controls">
          <button onClick={() => setDisplayContent(displayContent + '/')}><i className="fas fa-divide"></i></button>
          <button onClick={() => setDisplayContent(displayContent + '*')}><i className="fas fa-times"></i></button>
          <button onClick={() => setDisplayContent(displayContent + '-')}><i className="fas fa-minus"></i></button>
          <button onClick={() => setDisplayContent(displayContent + '+')}><i className="fas fa-plus"></i></button>
          <button onClick={equals}><i className="fas fa-equals"></i></button>
        </div>
        <div className="numbers">
          {numbers.map(i => (
            <button key={i} onClick={() => setDisplayContent(displayContent + i)}>{i}</button>
          ))}
          <button className="zero" onClick={() => setDisplayContent(displayContent + 0)}>0</button>
          <button onClick={() => setDisplayContent(displayContent + '.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
