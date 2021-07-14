import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";
function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
    <div className="row mx-auto m-2 p-3 todoitem rounded">
      <div className="col">
        {editable ? (
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        ) : (
          <h5>{todo.name}</h5>
        )}
      </div>
      <button
        className="btn-dark m-1"
        onClick={() => {
          dispatch(
            updateTodo({
              ...todo,
              name: name,
            })
          );
          if (editable) {
            setName(todo.name);
          }
          setEditable(!editable);
        }}
      >
        {editable ? (
          "Update"
        ) : (
          <i className="fa fa-pencil" aria-hidden="true"></i>
        )}
      </button>
      <button
        className="btn-danger m-1"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </button>
    </div>
  );
}
export default TodoItem;