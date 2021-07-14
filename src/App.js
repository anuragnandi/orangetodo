import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function App() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="container text-center m-2 mx-auto">
      <h1 className="p-3 font-weight-bold">Todo App</h1>
      <button onClick={onOpenModal} className="btn btn-dark">
        Add new note
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <TodoInput />
      </Modal>

      <TodoList />
    </div>
  );
}
export default App;
