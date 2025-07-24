import React from 'react';
import TodoList from './TodoList';

const App = () => {
  const tasks = ['Learn useEffect', 'Use && and ? :', 'Build a better Todo List'];

  return (
    <div>
      <TodoList initialTodos={tasks} />
    </div>
  );
};

export default App;
