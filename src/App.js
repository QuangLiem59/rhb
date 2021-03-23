import React, { useState, useEffect } from 'react';
import './App.scss';
import Name from './components/name/Name';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <h1> Wellllllllllll </h1>
      <p>{count}</p>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>
      <Name n={'Liem'} />
    </div>

  );
}

export default App;
