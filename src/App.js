import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import List from "./components/List";

function App() {
  let [listTodo, setListTodo] = useState([]);

  let handleAddList = function (inputText) {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  let handleDelete = function (index) {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo(newListTodo);
  };

  return (
    <div>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={handleAddList} />
          <h1 className="app-heading">Todo</h1>
          <hr />
          {listTodo.map((listItem, i) => {
            return (
              <List
                key={i}
                index={i}
                item={listItem}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
