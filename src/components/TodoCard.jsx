import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props; // children is special kind of prop (see react docs)

  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button
            onClick={() => {
              handleEditTodo(index);
            }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              handleDeleteTodo(index);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
}
