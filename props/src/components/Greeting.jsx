import React from 'react';

const Greeting = (props) => {
  return (
    <div>
      <h2>
        안녕하세요 {props.name}{props.uname}
      </h2>
      <p>count 값: {props.count}</p>
    </div>
  );
};

export default Greeting;
