import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from './Store';
import { Navigate } from "react-router-dom";
function Todo() {
    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todos);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const handleAddTodo = () => {   
      if (text.trim()) {
        dispatch(addTodo(text));       
        setText('');   }  }; 
  return (
      <div>
        {!isAuthenticated && <Navigate to="/Login" />} 
        <h1>Todo List</h1>
        <input
          type="text" value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new todo"
          className="TodoInput"     />
         <button onClick={handleAddTodo} className="TodoButton1">Add Todo</button>
      <ul>
        {todos&&todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}   // // todo.id가 payload 
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',             }}        >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="TodoButton2">
                Delete
           </button>
          </li>
        ))}    </ul>   </div>
  );}
export default Todo;