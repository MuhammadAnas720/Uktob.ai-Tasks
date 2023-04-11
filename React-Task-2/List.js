import React, { useState } from 'react';
import './List.css';

function List() {
  // Declare state variables for inputText and todoList
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  // Define a function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Add inputText to todoList
    setTodoList([...todoList, inputText]);
    // Clear inputText
    setInputText('');
  };

  // Define a function to handle deleting an item from todoList
  function handleDelete(index) {
    // Remove item at index from todoList
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add item" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      {/* List */}
      <ul>
        {/* map the items */}
        {todoList.map((item, index) => (
          <li key={index}>
            <div className="list-item">
            {item}
            </div>
            <button className="button-del" onClick={() => handleDelete(index)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;