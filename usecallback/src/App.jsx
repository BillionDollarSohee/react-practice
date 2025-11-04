import './App.css'
import {useEffect , useState , useCallback} from 'react'

function App() {

  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  /*
  const someFunction = () =>{
    console.log("number : " + number);   //POINT App() 랜더링 될때마다 함수의 주소는 바뀐다
    return;
  }
  */

  const someFunction = useCallback(() => {
    console.log("number : " + number);
    return
  }, [number]) // 의존성 배열 number 값이 바뀌면 새로운 함수 생성

  useEffect(() => {
    console.log("useEffect call");
  },[someFunction])
  // 함수도 객체고 주소값을 가지고 있다.
  // 주소값이 바뀌면 useEffect가 실행된다.
  // 다른값으로 바뀌었다고 판단하기 때문이다.

  return (
    <div className = 'App'>
      <input type = 'number' value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => {setToggle(!toggle)}}>{toggle.toString()}</button>
      <hr />
      <button onClick={someFunction}> call someFunction</button>
    </div>
  )
}

export default App
