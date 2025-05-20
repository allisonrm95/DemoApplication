import React from 'react';
import Reason from './reason';
import { useState } from 'react';

function Input() {
  const [reason, setReason] = useState('');
  const [reasonList, setReasonList] = useState([]);

  const generateReason = async (text) => {
    await fetch('/reason', { method: 'POST', body: { text } });
    setReasonList([...reasonList, text]);
    return;
  };

  const reasons = reasonList.map((reason) => {
    return <p>{reason}</p>;
  });
  return (
    <>
      <input
        type='text'
        placeholder='state your reason...'
        className='inputField'
        onChange={(e) => {
          setReason(e.target.value);
        }}
      ></input>
      <button onClick={generateReason(reason)}>Sumbit</button>
      {reasons}
    </>
  );
}
export default Input;
