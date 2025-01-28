import PropTypes from "prop-types";
import "../ToDoList/ToDoList.scss";

export default function ToDoList({ title }) {
  return (
    <div className="todolist">
      <h1>{title}</h1>
    </div>
  );
}

ToDoList.propTypes = {
  title: PropTypes.string.isRequired,
};
