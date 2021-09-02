import { AppUI } from "./AppUI";
import React from "react";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el curso de React", completed: true },
//   { text: "Llorar con la llorona", completed: true },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
