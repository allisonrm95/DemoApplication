import React from 'react';
import SingleReason from './singleReason';
function Reasons({ reasonList }) {
  return reasonList.map((reason) => {
    return <SingleReason reason={reason} />;
  });
}

export default Reasons;
