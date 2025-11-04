import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  }; 

  //useEffect는 마운트될때 state바뀔때, 언마운트될때 동작함
  useEffect(() => {
      console.log("마운트때 딱 1번만");
    }, []
  )
  
  useEffect(() => {
      console.log("매번 랜더링 될때마다");
    }
  )

  useEffect(() => {
      console.log("마운트랑 countState가 바뀔때마다");
    }, [count]
  )

  useEffect(() => {
      console.log("마운트랑 nameState가 바뀔때마다");
    }, [name]
  )





  return (
    <>
      <div className = 'app'>
        <button onClick={handleCountUpdate}>count-update</button>
        <span>count:{count}</span>
        <input type='text' value={name} onChange={handleInputChange} />
      </div>
    </>
  )
}

export default App
