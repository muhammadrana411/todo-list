import React, { useState } from "react";

function TodoInput({ addList }) {
  let [inputText, setInputText] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    addList(inputText);
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your Task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="add-btn"
        onClick={() => {
          addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </form>
  );
}

export default TodoInput;
