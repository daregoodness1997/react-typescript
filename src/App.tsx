import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import TextField from './TextField';
import Counter from './Counter';

function App() {
  return (
    <div className='App'>
      <Header title='Dare XD' color='red' />
      {/* <TextField
        text='Hello'
        person={{ firstName: 'Ade', lastname: 'Wunmi' }}
        handleChange={e => {
          console.log(e.target.value);
        }}
      /> */}

      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;
