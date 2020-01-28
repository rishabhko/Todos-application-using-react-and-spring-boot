import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Signup extends Component {

    state={
        change:false,
        
    }

    submitForm=(event)=>{
        event.preventDefault();
        // this.props.click(event.target.email.value,event.target.password.value)
        
        const data={
            email: event.target.email.value,
            password:event.target.password.value
          }

        axios.post("http://localhost:8080/signup",data)
  .then(response=>{

    if(response.data){
        this.props.click(false,data.email,data.password)
        console.log(data)
        axios.post("http://localhost:8081/sendmail",data)
        this.setState({change:true})
        
}
    else{
        alert("Account already made!! Please login")
    }
  }
  
  
  
  
  ).catch(e=>console.log(e))

    }




  render() {

    let body="";

    if(this.state.change){
        body=<Redirect to= '/otpValidate'/>
       
    }
    else
       body= <form onSubmit={this.submitForm}>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            type="email"
            name="email"
            class="form-control"
            id="inputEmail3"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            type="password"
            name="password"
            class="form-control"
            id="inputPassword3"
            placeholder="Password"
          />
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">
            Send me OTP
          </button>
        </div>
      </div>
    </form>

    return (
      <React.Fragment>
          {body}
       
      </React.Fragment>
    );
  }
}

export default Signup;
