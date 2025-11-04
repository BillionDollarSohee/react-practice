import Parent from "./component/Parent"
import './App.css'
import { useState,useMemo } from "react";

// 복잡한 계산
const hardCalculate = (number) => {
  console.log("복잡한논리 계산");
  for(let i = 0; i < 999999999; i++) {}
  return number + 10000;
}


// 쉬운 계산
const easyCalculate = (number) => {
  console.log("쉬운논리 계산");
  return number + 1;
}

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // 배열에 저장된 값이 바뀔 때만 호출
  const hardSum = useMemo(() => {return hardCalculate(hardNumber)}, [hardNumber]) 
  const easySum = easyCalculate(easyNumber);

  return (
    <>
      <div className='App'>
        <h3>component 코드</h3>
        <Parent />


        <h3>계산기 코드</h3>
        <h3>복잡한 계산</h3>
        <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
        <span>+ 10000 = {hardSum}</span>
        
        <h3>쉬운 계산</h3>
        <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
        <span>+ 10000 = {easySum}</span>
      </div>
    </>
  )
}

export default App


/*
아래 코드의 문제점 : 쉬운 계산을 하려고 해도 오래 걸린다.
useState()가 변경되면 -> App()호출 -> 모든함수호출

해결 방법)
useMemo는 메모이제이션(Memoization)을 통해 특정 값이 변경될 때만
재계산을 수행하도록하여 불필요한 연산을 줄여줍니다
값(useState)이 변하지 않으면 이전에 계산된 값을 재사용하는 것입니다. 
이 방법은 특히 계산 비용이 큰 연산을 할 때 유용합니다.

결국 ...useState  변경시에만 특정 계산을 수행

--------------------------------------------------------------------

--------------------------------------------------------------------
function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);
  const easySum = easyCalculate(easyNumber);

  return (
    <>
      <div className='App'>
        <h3>component 코드</h3>
        <Parent />


        <h3>계산기 코드</h3>
        <h3>복잡한 계산</h3>
        <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
        <span>+ 10000 = {hardSum}</span>
        
        <h3>쉬운 계산</h3>
        <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
        <span>+ 10000 = {easySum}</span>
      </div>
    </>
  )
}

export default App
*/