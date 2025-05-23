import React from 'react';
import { useState } from 'react';

function Input({ setReasonList }) {
  ``;
  const [reason, setReason] = useState('');
  const updateReasonList = async () => {
    const response = await fetch('http://localhost:8080/api/reasons');
    const data = await response.json();
    setReasonList(data);
  };

  const generateReason = async (text) => {
    try {
      const response = await fetch('http://localhost:8080/api/reasons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ reason: text }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(
          `Server responded with ${response.status}: ${errorData}`
        );
      }

      // const data = await response.json();
      // setReasonList((prevList) => [...prevList, data]);
      setReason(''); // Clear input after successful submission
      updateReasonList();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <input
        type='text'
        placeholder='state your reason...'
        className='inputField'
        value={reason}
        onChange={(e) => {
          setReason(e.target.value);
        }}
      />
      <button onClick={() => generateReason(reason)}>Submit</button>

      {/* <div className='reasons-list'>
        {reasonList.map((reason) => (
          <p key={reason.id}>{reason.reason}</p>
        ))}
      </div> */}
    </>
  );
}

export default Input;
