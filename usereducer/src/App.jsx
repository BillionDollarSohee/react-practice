import './App.css'
import { useState, useReducer } from 'react'

// enum 처럼 사용
const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw'
}

// reducer (state 변경하는 곳)
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
}

function App() {
  const [number, setNumber] = useState(0);        // 입력한 금액
  const [money, dispatch] = useReducer(reducer,0) // 잔액

  return (
    <>
      <h3>은행</h3>
      <p>잔액: {money}</p>
      <hr />

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        step="1000"
      />

      <button onClick={() => dispatch({ type: ACTION_TYPES.deposit, payload: number })}>
        입금
      </button>

      <button onClick={() => dispatch({ type: ACTION_TYPES.withdraw, payload: number })}>
        출금
      </button>
    </>
  )
}

export default App
