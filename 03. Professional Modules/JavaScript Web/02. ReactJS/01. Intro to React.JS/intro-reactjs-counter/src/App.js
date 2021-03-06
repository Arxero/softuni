import React from 'react'
import './App.css'
import rerender from './index'

let counter = 0
const incrementCounter = () => {
    counter++
    rerender(Counter(), document.getElementById('root'))
}

const Counter = () =>  (
      <div className="App">
        <header className="App-header">
          {counter}
        </header>
        <p>
            <button onClick={incrementCounter}>Click</button>
        </p>
      </div>
    )

export default Counter
