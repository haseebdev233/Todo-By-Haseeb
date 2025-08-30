// components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, updateTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="bi bi-clipboard-check fs-1 mb-3 text-muted"></i>
        <p className="text-muted">No todos yet. Add your first todo above!</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No #</th>
            <th scope="col">Title</th>
            <th scope="col">Location</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;