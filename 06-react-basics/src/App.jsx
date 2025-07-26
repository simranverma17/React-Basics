import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice JavaScript", completed: true },
    { id: 3, text: "Build Projects", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const taskToBeAdded = () => {
    if (newTask.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setNewTask("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Todo List</h2>

      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className={styles.input}
        />
        <button onClick={taskToBeAdded} className={styles.button}>
          Add Task
        </button>
      </div>

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
      ))}
    </div>
  );
}

export default App;
