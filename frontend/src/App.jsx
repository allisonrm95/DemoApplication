import { useState } from 'react';
import orlaPic from './assets/orla.png';
import meadowPic from './assets/meadow.png';
import './App.css';
import Reasons from './components/reasons/Reasons';
import Input from './components/input/input';

function App() {
  const [meadow, setMeadow] = useState(0);
  const [orla, setOrla] = useState(0);
  const [reasonList, setReasonList] = useState([]);

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
        <Input setReasonList={setReasonList} />
        <Input setReasonList={setReasonList} />
      </div>
      <div className='reasonDiv'>
        <Reasons reasonList={reasonList} />
      </div>
    </>
  );
}

export default App;
