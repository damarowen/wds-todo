import React, {useState, useRef, useEffect} from 'react';
import TodoList from './Component/Todolist';
import {v4 as UUIDV4}  from 'uuid'

function App() {

  const data = [
    {id: "1", name:"makan", isComplete:  false},
    {id: "2", name:"tidur", isComplete: false}
  ]
      //use ref to refference 
       const todoNameReference = useRef()
       //create state management for dynamic changes
       const [todosData, setTodos] = useState(data)

          //to call data 
          useEffect(() => {

            const storedTodos = JSON.parse(localStorage.getItem("random_key"))
            console.log(storedTodos, ">>>>")

            if(storedTodos && storedTodos.length > 0) setTodos(storedTodos)
            //setTodos(storedTodos)
           }, []) //<== empty arry means only call once
    
           
       //to persisted data
       useEffect(() => {
        localStorage.setItem("random_key", JSON.stringify(todosData))
       }, [todosData]) //<== Anytime in this array changes, this function will invoked

       function toggleTodoFunc(id) {
        const newTodos = [...todosData] // create copy todosData state
        const todo = newTodos.find(todo => todo.id === id)
        todo.isComplete = !todo.isComplete
        setTodos(newTodos)
      }
    
      function handleClearTodos() {
        const newTodos = todosData.filter(todo => !todo.isComplete) // folter yg is complete nya false
        setTodos(newTodos)
      }

       function handleAddTodo (e){
          const input = todoNameReference.current.value
          if(input === "") return
          const newTodo = {
            id: UUIDV4(),
            name : input,
            complete: false
          }

          setTodos(prevTodos => {
            return [...prevTodos,newTodo]
          })
          todoNameReference.current.value = ""
       }

  return (


      //create component todolist
        //create fragment ( for return two things)

    <>
    <TodoList todos={todosData} toggleTodoFromApp={toggleTodoFunc}/>
      <input ref={todoNameReference} type="text"></input>
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todosData.length} left to do</div>
  </>
  );
}

export default App;
