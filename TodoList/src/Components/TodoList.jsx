import React from 'react';

const TodoList = ({ tasks }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;