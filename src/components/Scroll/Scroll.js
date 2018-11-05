import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '3px solid black', height: '800px', boxShadow: '3px 3px #888888' }}>
      {props.children}
    </div>
  );
};

export default Scroll;