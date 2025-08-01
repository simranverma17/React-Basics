import React, { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      setError('Todo cannot be empty.');
      return;
    }

    if (title.trim().length < 3) {
      setError('Todo must be at least 3 characters long.');
      return;
    }

    onAdd(title.trim());
    setTitle('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', width: '250px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', marginLeft: '10px' }}>
        Add Todo
      </button>
      {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
    </form>
  );
};

export default AddTodoForm;
