import React from "react";
import "./Todos.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

const todos = props => {
  const deleteHandler = () => {
    const data = {
      id: props.id
    };
    axios
      .post("http://localhost:8080/delete", data)
      .then(response => {
        if (response.data) {
           alert("Deleted");
          
          
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-4 offset-1">{props.task}</div>
        <div className="col-4">{props.deadline}</div>

       

        <button
          onClick={deleteHandler}
          className="col-2 btn btn-outline-danger"
        >
         delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default todos;
