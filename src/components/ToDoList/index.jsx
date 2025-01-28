import PropTypes from "prop-types";
import { useState } from "react";
import "../ToDoList/ToDoList.scss";

export default function ToDoList({ title }) {
  const [tasks, setTasks] = useState([]);
  const [saisie, setSaisie] = useState("");

  const addTask = () => {
    if (saisie) {
      const newTask = [...tasks, { text: saisie, completed: false }];
      setTasks(newTask);
      setSaisie("");
    }
  };

  const toggleTask = (index) => {
    const updateTask = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateTask);
  };

  const updateTask = () => {
    const update = tasks.filter((task) => !task.completed);
    setTasks(update);
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
          placeholder="Ajouter une tâche"
        />
      </div>
      <div className="todolist__button">
        <button onClick={addTask} className="todolist__button--btn">
          Ajouter
        </button>
        <button onClick={updateTask} className="todolist__button--btn">
          Supprimer
        </button>
      </div>
      <ul className="todolist__list">
        {tasks.map((task, index) => (
          <li key={index} className="todolist__list--item">
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span className={task.completed ? "completed" : ""}>
                {task.text}
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
