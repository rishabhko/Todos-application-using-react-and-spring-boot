import React, { Component } from "react";
import Todo from "./Todos/Todos";
import axios from "axios";
import {Link} from 'react-router-dom'

class TodoList extends Component {
  state = {
    loggedIn: this.props.logged,
    id: this.props.user,
    user: [
      // {
      // email:"rishabh",
      // task: "Complete homework",
      // deadline:"23/12/1996"
      // },
      // {
      //   userId:"prince",
      //   task: "Complete homework",
      //   deadline:"23/12/1996"
      //   }
    ]
  };

  componentWillMount() {
    const data = {
      email: this.state.id
    };
    const values = {
      email: null,
      task: null,
      deadline: null
    };

    const arrayOfValues = [];
    axios
      .post("http://localhost:8080/taskGet", data)
      .then(response => {
            
        for (const key of response.data) {
          arrayOfValues.push(key);
        }

        // this.setState({user: [...arrayOfValues]})
        this.setState({
          user: this.state.user.concat(...arrayOfValues)
        });
        // console.log(response.data)
        // console.log(arrayOfValues)
        // console.log(this.state)
      })
      .catch(error => console.log(console.error()));
  }

  render() {
let show="";
let show2="";

    if(this.state.loggedIn){
     show = <div>Your Todos</div>
     show2=<div className="wrapper">
     <Link to="addTodo">
       <button className="btn btn-lg btn-primary ">Add Todo</button>
     </Link>
   </div>
    }

    const items = [];
    if (this.state.loggedIn) {
      for (const key of this.state.user) {
        items.push(<Todo id={key.id} task={key.task} deadline={key.deadline} />);
        items.push(<br></br>);
      }
    }
    if (!this.state.loggedIn) {
      items.push(<h1>PLease login first</h1>);
    }

    return (
      <React.Fragment>
        {show}
        {items}
        {show2}
        
      </React.Fragment>
    );
  }
}
export default TodoList;
