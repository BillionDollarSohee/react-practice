import React from 'react';
import Child from './Child';
import { useState } from 'react';


const Parent = () => {
  console.log('Parent Rendered');
  const [count, setCount] = useState(0);
  const [name, setName] = useState('hikari'); 


  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Count 증가</button>
      <button onClick={() => setName("Voundy")}>Props 변경</button>
      <hr />  
      <Child name={name} />
    </div>
  );
};

export default Parent;