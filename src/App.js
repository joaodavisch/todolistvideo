import { useState, useEffect } from 'react';
import './App.css';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000"


function App() {
const [title, setTitle] = useState("")
const [time, setTime] = useState("")
const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(false)


  return (
    <div  className="App">
      <div className="todo-header">
        <h1>react todo</h1>
      </div>
      <div className="form-todo">
        <h1>formulario</h1>
      </div>
      <div className="list-todo">
        <h2>Listas de tarefas</h2>
        {todos.length === 0 && <p>Não a tarefas</p>}
      </div>
    </div>
  );
}

export default App;
