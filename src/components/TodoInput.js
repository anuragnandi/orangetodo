import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";


function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div className="m-3">
      <div className="row">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="col-12 mx-auto m-2 p-2"
          placeholder="add new task"
        />
      
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
          className="btn btn-dark col-12 mx-auto p-2"
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
export default TodoInput;
