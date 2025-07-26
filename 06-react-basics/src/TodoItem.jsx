import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, onToggle }) => {
  return (
    <div
      className={`${styles.todoItem} ${
        todo.completed ? styles.completed : styles.active
      }`}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </div>
  );
};

export default TodoItem;
