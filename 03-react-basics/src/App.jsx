import React from 'react';
import TodoList from './NewToDo';

const App = () => {
  const tasks = ['Learn React', 'Practice useState'];

  return (
    <div>
      <TodoList initialTodos={tasks} />
    </div>
  );
};

export default App;