import './App.css'
import Greeting from "./components/Greeting.jsx"
import List from "./components/List.jsx"
import User from "./components/User.jsx"

function App() {
  const username = "su";
  const constData = 100;

  const user = {
    name: "kim",
    age: 30,
    email:'email.gmail.com'
  }

  const todolist = ['리액트 공부','컴포넌트 만들기','투두리스트 만들기'];

  return (
    <div className='App'>
      <Greeting name={username} uname="님" count={constData}/>
      <List items={todolist}/>
      <User user={user}/>
    </div>
  )
}

export default App
