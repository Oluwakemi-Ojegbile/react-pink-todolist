import React, { useState } from "react";
import { addTodo } from "../action";
import { connect } from "react-redux";
import AddForm from "./AddForm";

const AddTodo = ({ saveTodoItem }) => {
  const [toggle, setToggle] = useState(false);
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    errors: {}
  });

  function toggleForm() {
    setToggle(!toggle);
    setFormInput({
      ...formInput,
      title: "",
      description: "",
      errors: {}
    });
  }

  function handleChange(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  }
  function handleValidation() {
    const errors = {};
    let isValid = true;
    if (formInput.title === "") {
      isValid = false;
      errors.title = "*title is required";
    }
    if (formInput.description === "") {
      isValid = false;
      errors.description = "*description is required";
    }
    setFormInput({
      ...formInput,
      errors
    });
    return isValid;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (handleValidation()) {
      delete formInput.errors;
      saveTodoItem(formInput);
      setFormInput({
        title: "",
        description: "",
        errors: {}
      });
      toggleForm();
    }
  }
  return (
    <div>
      <AddForm show={toggle}>
        <form onSubmit={handleSubmit} className="form_wrapper">
          <input
            type="text"
            name="title"
            placeholder="Title..."
            onChange={handleChange}
            value={formInput.title}
          />
          <small className="error_msg"> {formInput.errors.title} </small>
          <input
            type="text"
            name="description"
            placeholder="Description..."
            onChange={handleChange}
            value={formInput.description}
          />
          <small className="error_msg"> {formInput.errors.description} </small>
          <span className="saveClose_btn">
            <button type="submit" className="save-btn">
              Save
            </button>
            <button onClick={toggleForm} className="submit-btn">
              Close
            </button>
          </span>
        </form>
      </AddForm>
      <button type="button" onClick={toggleForm} className="addtodo-btn">
        + ADD TODO
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  saveTodoItem: todo => dispatch(addTodo(todo))
});

export default connect(null, mapDispatchToProps)(AddTodo);
