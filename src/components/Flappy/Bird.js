import React from 'react';

const Bird = ({ birdY }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: birdY,
        left: '100px',
        width: '40px',
        height: '40px',
        backgroundColor: 'yellow',
        borderRadius: '50%',
      }}
    ></div>
  );
};

export default Bird;
