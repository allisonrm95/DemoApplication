import React from 'react';
import { useState } from 'react';

function Input() {
  const [reason, setReason] = useState('');
  const [reasonList, setReasonList] = useState([]);
  const [error, setError] = useState(null);

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

      const data = await response.json();
      setReasonList((prevList) => [...prevList, data]);
      setReason(''); // Clear input after successful submission
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
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

      {error && (
        <div
          className='error-message'
          style={{ color: 'red', marginTop: '10px' }}
        >
          Error: {error}
        </div>
      )}

      <div className='reasons-list'>
        {reasonList.map((reason) => (
          <p key={reason.id}>{reason.reason}</p>
        ))}
      </div>
    </>
  );
}

export default Input;
