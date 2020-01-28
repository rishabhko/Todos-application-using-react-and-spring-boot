import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    loggedIn: this.props.loggedIn
  };

  logOut=()=>{
    this.setState({loggedIn:false}
      
    )
    this.props.logOut();
  }
  submitForm = (event) => {
    // const email1 = document.getElementById("exampleInputEmail1");
    // console.log(email1);
    // const email1=document.getElementById(exampleInputEmail1);
  // const data={
  //   email: "rishabhkohli13@gmail.com",
  //   password:'password'
  // }
  event.preventDefault()
  
  const data={
    email: event.target.email.value,
    password:event.target.password.value
  }

  var xhr = new XMLHttpRequest();
  axios.post("http://localhost:8080/login",data)
  .then(response=>
    {
    this.setState({loggedIn:response.data})
    if(response.data)
    {
      this.props.click(true,data.email)
    }
    })
  .catch(error=>console.log(console.error()))

  
    
  };
  render() {
    let body="";
    if (this.state.loggedIn)
    { 

      // this.props.click();
      // let variables=this.props.click;
      body=
      <div>
      <h1>You are successfully logged in</h1>
      <button onClick={this.logOut}>log out</button>
      </div>
    }
    if (!this.state.loggedIn){
     body= <div>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label >Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <Link to="/signup">
            <p>Create my account</p>
          </Link>

          {/* <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            
            </div> */}
          <br></br>
          <button type="submit" className="btn btn-primary" >
            Login
          </button>
        </form>
        
      </div>
    }


   
    return (
      <React.Fragment>

        {body}
        <p></p>
        
      </React.Fragment>
    );
  }
}
export default Login;
