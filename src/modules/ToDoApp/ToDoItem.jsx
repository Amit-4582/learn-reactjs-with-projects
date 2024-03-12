// ToDoItem.jsx
import React from "react";
import "../../App.css";

const ToDoItem = ({
  task,
  deleteItem,
  toggleCompletedTask,
  editItem,
  editTaskId,
  editedText,
  setEditedText,
  saveEditedItem,
}) => {
  const handleChange = () => {
    toggleCompletedTask(task.id);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      {editTaskId === task.id ? (
        <>
          <div className="input-button-wrapper">
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="task-input"
            />
            <button className="btn btn-warning" onClick={saveEditedItem}>Save</button>
          </div>
        </>
      ) : (
        <>
          <p className={task.completed ? "completed" : ""}>{task.text}</p>
          <div className="edit-button" onClick={() => editItem(task.id)}>
            Edit
          </div>
          <div className="delete-button" onClick={() => deleteItem(task.id)}>
            Delete
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default ToDoItem;
