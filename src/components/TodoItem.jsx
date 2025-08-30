// components/TodoItem.jsx
import React, { useState } from 'react';

const TodoItem = ({ todo, index, toggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editLocation, setEditLocation] = useState(todo.location);

  const handleUpdate = () => {
    updateTodo(todo.id, {
      title: editTitle,
      description: editDescription,
      location: editLocation
    });
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setEditLocation(todo.location);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <tr className="todo-item editing">
        <td>{index + 1}</td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            value={editLocation}
            onChange={(e) => setEditLocation(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </td>
        <td>
          <span className={`badge ${todo.completed ? 'bg-success' : 'bg-warning'}`}>
            {todo.completed ? 'Completed' : 'Active'}
          </span>
        </td>
        <td>
          <div className="btn-group">
            <button
              className="btn btn-sm btn-success"
              onClick={handleUpdate}
              title="Save changes"
            >
              <i className="bi bi-check"></i>
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={cancelEdit}
              title="Cancel editing"
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <th scope="row">{index + 1}</th>
      <td className="todo-title">{todo.title}</td>
      <td className="todo-location">{todo.location || '-'}</td>
      <td className="todo-description">{todo.description || '-'}</td>
      <td>
        <span className={`badge ${todo.completed ? 'bg-success' : 'bg-warning'}`}>
          {todo.completed ? 'Completed' : 'Active'}
        </span>
      </td>
      <td>
        <div className="btn-group">
          <button
            className={`btn btn-sm ${todo.completed ? 'btn-warning' : 'btn-success'}`}
            onClick={() => toggleComplete(todo.id)}
            title={todo.completed ? 'Mark as active' : 'Mark as completed'}
          >
            <i className={`bi ${todo.completed ? 'bi-arrow-repeat' : 'bi-check'}`}></i>
          </button>
          <button
            className="btn btn-sm btn-info"
            onClick={() => setIsEditing(true)}
            title="Edit todo"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteTodo(todo.id)}
            title="Delete todo"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TodoItem;