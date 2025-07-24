import React from 'react';
import TodoList from './TodoList';

const App = () => {
  const tasks = ['Learn React', 'Build a Todo App', 'Practice Props', 'Master CSS'];

  return (
    <div>
      <TodoList todos={tasks} />
    </div>
  );
}

export default App