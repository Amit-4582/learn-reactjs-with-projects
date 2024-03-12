// ToDoApp.jsx
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import "../../App.css";

const ToDoApp = () => {
  const taskData = [
    {
      id: 1,
      text: "Wake up early in the morning",
      completed: true,
    },
    {
      id: 2,
      text: "Do exercise or yoga.",
      completed: true,
    },
    {
      id: 3,
      text: "Take a bath and be ready.",
      completed: true,
    },
  ];

  const [tasks, setTasks] = useState(taskData);
  const [text, setText] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addItem = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletedTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      })
    );
  };

  const editItem = (id, newText) => {
    setEditTaskId(id);
    setEditedText(newText);
  };

  const saveEditedItem = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === editTaskId) {
          return {
            ...task,
            text: editedText,
          };
        } else {
          return task;
        }
      })
    );
    setEditTaskId(null);
    setEditedText("");
  };

  return (
    <div className="todo-app">
      <header className="todo-header">To Do App</header>
      <div className="todo-list">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteItem={deleteItem}
            toggleCompletedTask={toggleCompletedTask}
            editItem={editItem}
            editTaskId={editTaskId}
            editedText={editedText}
            setEditedText={setEditedText}
            saveEditedItem={saveEditedItem}
          />
        ))}
        <div className="input-button-wrapper">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new task"
            className="task-input"
          />
          <button className="btn btn-warning" onClick={() => addItem(text)}>
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
