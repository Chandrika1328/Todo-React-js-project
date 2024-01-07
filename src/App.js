import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // localStorage.removeItem("tasklist");
  const[tasklist,setTasklist] = useState( JSON.parse(localStorage.getItem("tasklist",JSON.stringify("tasklist")))|| []);
  const[task,setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist",JSON.stringify(tasklist))
  },[tasklist]);

  return (
    <div className='App'>
      <Header />
      <AddTask tasklist = {tasklist} setTasklist ={setTasklist} 
      setTask={setTask} task={task}
      />
      <ShowTask  tasklist = {tasklist} setTasklist = {setTasklist}
      setTask={setTask} task={task}/>


    </div>
  );
}

export default App; 
