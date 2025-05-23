import React from 'react';

function SingleReason({ reason }) {
  return (
    <>
      <p key={reason.id}>{reason.reason}</p>
      <button>Delete</button>
    </>
  );
}

export default SingleReason;
