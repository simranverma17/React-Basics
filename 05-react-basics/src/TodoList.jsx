import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
