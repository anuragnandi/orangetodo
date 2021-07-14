import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { Bounce } from "react-reveal";

function TodoList() {
  let todos = useSelector((state) => state);
  return (
    <div className="row">
      {todos.map((todo) => {
        return (
          <Bounce bottom>
            <div key={todo.id} className="col-md-4 col-6">
              <TodoItem todo={todo} />
            </div>
          </Bounce>
        );
      })}
    </div>
  );
}

export default TodoList;
