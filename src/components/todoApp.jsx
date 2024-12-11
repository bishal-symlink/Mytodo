import { useState } from "react";

const TodoApp = () => {
  // States for todos, new todo input, and filters
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all"); // Options: 'all', 'done', 'incomplete'
  const [searchTerm, setSearchTerm] = useState("");

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // Handle toggling the completion status of a todo
  const handleToggleCompletion = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // Handle deleting a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on completion status and search term
  const filteredTodos = todos
    .filter((todo) => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((todo) => {
      if (filter === "done") return todo.completed;
      if (filter === "incomplete") return !todo.completed;
      return true; // Show all todos if filter is 'all'
    });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex flex-col items-center justify-start py-10 px-4">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-white mb-6">Todo App</h1>

      {/* Add Todo Section */}
      <div className="w-full max-w-lg flex space-x-4 mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="w-full p-4 rounded-lg shadow-md text-black outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          onClick={handleAddTodo}
          className="px-6 py-4 bg-pink-600 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          Add
        </button>
      </div>

      {/* Search Todo */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Todo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 w-72 rounded-lg shadow-md text-black outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filter by Status */}
      <div className="flex space-x-6 mb-6">
        <label className="text-white font-semibold">
          <input
            type="radio"
            value="all"
            checked={filter === "all"}
            onChange={(e) => setFilter(e.target.value)}
            className="mr-2"
          />
          All
        </label>
        <label className="text-white font-semibold">
          <input
            type="radio"
            value="done"
            checked={filter === "done"}
            onChange={(e) => setFilter(e.target.value)}
            className="mr-2"
          />
          Done
        </label>
        <label className="text-white font-semibold">
          <input
            type="radio"
            value="incomplete"
            checked={filter === "incomplete"}
            onChange={(e) => setFilter(e.target.value)}
            className="mr-2"
          />
          Incomplete
        </label>
      </div>

      {/* Todo List */}
      <div className="w-full max-w-lg">
        {filteredTodos.length > 0 ? (
          <ul className="space-y-4">
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleCompletion(todo.id)}
                    className="form-checkbox h-5 w-5 text-pink-600"
                  />
                  <span className={`${todo.completed ? "line-through text-gray-500" : "text-black"} text-lg`}>
                    {todo.text}
                  </span>
                </div>
                <button onClick={() => handleDeleteTodo(todo.id)} className="text-red-600 hover:text-red-800">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No todos found.</p>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
