import React, { useState } from 'react';

const TodoList = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem !== '') {
      setTodos([...todos, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
    
        ))}
      </ul>
    </div>
  );
};

export default TodoList;