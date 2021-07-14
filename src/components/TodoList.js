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
          <div key={todo.id} className="col-md-4 col-6">
            <Bounce bottom>
              <TodoItem todo={todo} />
            </Bounce>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
