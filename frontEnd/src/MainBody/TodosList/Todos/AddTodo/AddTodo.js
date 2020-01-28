import React, { Component } from "react";
import axios from "axios";

class AddTodo extends Component {
  state = {
    email: this.props.email
  };
  formHandler = event => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      task: event.target.task.value,
      deadline: event.target.deadline.value
    };

    axios
      .post("http://localhost:8080/taskSave", data)
      .then(response => {
        console.log(response.data);
        alert("todo added")
      })
      .catch(error => console.log(console.error()));
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.formHandler}>
          <div class="form-group">
            <label for="exampleInputEmail1">Task to be done</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              name="task"
              aria-describedby="emailHelp"
              placeholder="Enter task title"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Deadline</label>
            <input
              type="date"
              class="form-control"
              name="deadline"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodo;
