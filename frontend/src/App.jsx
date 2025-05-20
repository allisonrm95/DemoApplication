import { useState } from 'react';
import orlaPic from './assets/orla.png';
import meadowPic from './assets/meadow.png';
import './App.css';
import Reason from './components/reason';
import Input from './components/input';

function App() {
  const [meadow, setMeadow] = useState(0);
  const [orla, setOrla] = useState(0);
  //I better see this change show up!!!!
  return (
    <>
      <div>
        <img src={meadowPic} className='cat' alt='Picture of Meadow' />
        <img src={orlaPic} className='cat' alt='Picture of Orla' />
      </div>
      <h1>Meadow + Orla</h1>
      <div className='card'>
        <button onClick={() => setMeadow((meadow) => meadow + 1)}>
          Meadow's votes: {meadow}
        </button>
        <button onClick={() => setOrla((orla) => orla + 1)}>
          Orla's votes: {orla}
        </button>
      </div>
      <div className='inputDiv'>
        <Input />
        <Input />
      </div>

      <Reason />
      <Reason />
      <Reason />
    </>
  );
}

export default App;
