import PropTypes from "prop-types";
import { useState } from "react";
import "../ToDoList/ToDoList.scss";

export default function ToDoList({ title }) {
  const [task, setTask] = useState([]);
  const [saisie, setSaisie] = useState("");

  const addTask = () => {
    if (saisie) {
      setTask([...task, { text: saisie, completed: false }]);
      setSaisie("");
    }
  };

  const toggleTask = (index) => {
    const updateTask = task.map((tasks, i) =>
      i === index ? { ...tasks, completed: !tasks.completed } : tasks
    );
    setTask(updateTask);
  };

  return (
    <div className="todolist">
      <h1 className="todolist__title">{title}</h1>
      <div className="todolist__search">
        <input
          type="text"
          value={saisie}
          onChange={(e) => setSaisie(e.target.value)}
          className="todolist__search--saisie"
        />
        <button onClick={addTask} className="todolist__search--btn">
          Ajouter
        </button>
      </div>
      <ul className="todolist__list">
        {task.map((tasks, index) => (
          <li key={index} className="todolist__list--item">
            <label>
              <input
                type="checkbox"
                checked={tasks.completed}
                onChange={() => toggleTask(index)}
              />
              <span className={tasks.completed ? "completed" : ""}>
                {tasks.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

ToDoList.propTypes = {
  title: PropTypes.string.isRequired,
};
