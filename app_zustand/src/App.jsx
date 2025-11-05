import './App.css'
import Todoinput from './components/todoinput'
import Todolist from './components/todolist'

function App() {


  return (
    <>
      <div className='App'>
        <h1>Zustand TodoList</h1>
        <Todoinput />
        <Todolist />
      </div>
    </>
  )
}

export default App
