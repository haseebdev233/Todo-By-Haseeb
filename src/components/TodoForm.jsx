// components/TodoForm.jsx
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, description, location);
      setTitle('');
      setDescription('');
      setLocation('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form mb-4">
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control todo-input"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary btn-lg">
          <i className="bi bi-plus-lg me-2"></i>
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;