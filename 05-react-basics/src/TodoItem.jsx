import React from 'react';

const TodoItem = ({ todo, index, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(index)}
      />
      {todo.completed ? <s>{todo.text}</s> : todo.text}
    </li>
  );
};

export default TodoItem;
