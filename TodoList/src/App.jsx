import React from "react";
import TodoList from "./Components/TodoList";

const App = () => {
  const tasks = [
    { text: "Do Homework", completed: false },
    { text: "Play guitar", completed: true },
  ];

  return (
    <div>
      <h1>My Tasks</h1>
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
