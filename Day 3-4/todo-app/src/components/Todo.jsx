import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "todo1",
      content: "Hello todo1",
      status: true,
    },
  ]);

  const [todo, setTodo] = useState({
    id: todos.length + 2,
    title: "",
    content: "",
    status: true,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "status") {
      setTodo({ ...todo, [name]: value === "true" });
    } else {
      setTodo({ ...todo, [name]: value });
    }
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (isEditing) {
      setTodos(
        todos.map((item) =>
          item.id === todo.id ? { ...todo } : item
        )
      );
      setIsEditing(false);
    } else {
      setTodos([...todos, { ...todo, id: todos.length + 1 }]);
    }
    setTodo({
      id: todos.length + 2,
      title: "",
      content: "",
      status: true,
    });
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setTodo(todoToEdit);
    setIsEditing(true);
  };

  return (
    <div>
      <form
        style={{ textAlign: "start", margin: "auto", width: "20%" }}
        onSubmit={handleAddTodo}
      >
        <label>Title</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={todo.title}
          onChange={handleChange}
        />
        <br />
        <label>Content</label> <br />
        <input
          type="text"
          placeholder="content"
          name="content"
          value={todo.content}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Status</label> <br />
        <label>
          True
          <input
            type="radio"
            name="status"
            value={true}
            onChange={handleChange}
            checked={todo.status === true}
          />
        </label>
        <label>
          False
          <input
            type="radio"
            name="status"
            value={false}
            onChange={handleChange}
            checked={todo.status === false}
          />
        </label>
        <br />
        <button type="submit">
          {isEditing ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      <div>
        <h3>Todo List</h3>
        <div>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  width: "150px",
                  margin: "auto",
                  backgroundColor: "#d3d346",
                  marginBottom: "10px",
                  padding: "10px",
                }}
              >
                <h2>Title: {todo.title}</h2>
                <h4>Content: {todo.content}</h4>
                <p>Status: {todo.status ? "Complete" : "Incomplete"}</p>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
