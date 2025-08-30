// components/FilterButtons.jsx
import React from 'react';

const FilterButtons = ({ filter, setFilter, activeTodosCount, clearCompleted }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 filter-buttons">
      <span className="text-muted">
        {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
      </span>
      <div className="btn-group" role="group">
        <button
          type="button"
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          type="button"
          className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default FilterButtons;