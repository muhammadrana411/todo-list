import React from "react";

function List({ item, index, handleDelete }) {
  return (
    <li className="list-item">
      {item}
      <span className="icons">
        <i
          className="material-icons icon-delete"
          onClick={() => handleDelete(index)}
        >
          delete
        </i>
      </span>
    </li>
  );
}

export default List;
