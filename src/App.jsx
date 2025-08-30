// App.jsx
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import './styles/App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
      toast.info('Todos loaded from storage', {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description, location) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      location,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, newTodo]);
    
    toast.success('Todo created successfully!', {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const updated = { ...todo, completed: !todo.completed };
          toast.info(`Todo marked as ${updated.completed ? 'completed' : 'active'}`, {
            position: "bottom-right",
            autoClose: 2000,
          });
          return updated;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    const todoToDelete = todos.find(todo => todo.id === id);
    setTodos(todos.filter((todo) => todo.id !== id));
    
    toast.error(`"${todoToDelete.title}" deleted`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const updateTodo = (id, updatedData) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const updated = { ...todo, ...updatedData };
          toast.success('Todo updated successfully!', {
            position: "top-right",
            autoClose: 3000,
          });
          return updated;
        }
        return todo;
      })
    );
  };

  const clearCompleted = () => {
    const completedCount = todos.filter(todo => todo.completed).length;
    setTodos(todos.filter((todo) => !todo.completed));
    
    if (completedCount > 0) {
      toast.info(`Cleared ${completedCount} completed todo${completedCount !== 1 ? 's' : ''}`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  const changePage = (page) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    return (
      <div className={`page-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'features' && <Features />}
        {currentPage === 'home' && (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-section text-center mb-5">
                <h1 className="display-4 fw-bold text-gradient mb-3">Todo App</h1>
                <p className="lead mb-4">Manage your tasks efficiently with style</p>
                <div className="hero-buttons">
                  <button className="btn btn-primary btn-lg me-2" onClick={() => document.querySelector('.todo-input')?.focus()}>
                    Get Started
                  </button>
                  <button className="btn btn-outline-primary btn-lg" onClick={() => changePage('features')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="todo-card card shadow-lg">
                <div className="card-body p-4">
                  <h2 className="card-title text-center mb-4">
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Todo
                  </h2>
                  <TodoForm addTodo={addTodo} />
                  
                  <div className="my-4 border-bottom"></div>
                  
                  <h2 className="card-title text-center mb-4">
                    <i className="bi bi-list-check me-2"></i>
                    Todo List
                  </h2>
                  <FilterButtons
                    filter={filter}
                    setFilter={setFilter}
                    activeTodosCount={activeTodosCount}
                    clearCompleted={clearCompleted}
                  />
                  <TodoList
                    todos={filteredTodos}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} changePage={changePage} />
      <main className="main-content">
        <div className="container">
          {renderPage()}
        </div>
      </main>
      <Footer changePage={changePage} />
      
      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;