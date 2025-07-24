import React, { useState, useEffect } from 'react';

const TodoList = ({ initialTodos }) => {
  const [todos, setTodos] = useState(
    initialTodos.map((item) => ({ text: item, completed: false }))
  );
  const [newItem, setNewItem] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  const handleAdd = () => {
    if (newItem !== '') {
      setTodos([...todos, { text: newItem, completed: false }]);
      setNewItem('');
    }
  };

  const toggleCompleted = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const handleShowCompletedToggle = () => {
    setShowCompleted(!showCompleted);
  };

  useEffect(() => {
    console.log('Todo list updated:', todos);
  }, [todos]);

  return (
    <div>
      <h2>My Todo List</h2>

      <input
        type="text"
        value={newItem}
        placeholder="Enter task"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <div>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={handleShowCompletedToggle}
        />
        <label>Show Completed</label>
      </div>

      <ul>
        {todos
          .filter((todo) => showCompleted || !todo.completed)
          .map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
              />
              {todo.text} {todo.completed ? '(done)' : ''}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;