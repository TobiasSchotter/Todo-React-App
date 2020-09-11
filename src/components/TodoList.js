import React from 'react';
import '../App.css';
import Todo from './Todo';
//import Todo from './Todo';

function TodoList({todos, setTodos, filteredTodos}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
            <Todo text={todo.text} todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))}
      </ul>
      
    </div>
    
  );
}

export default TodoList;