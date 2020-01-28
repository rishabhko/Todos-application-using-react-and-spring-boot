import React, { Component } from "react";
import Axios from "axios";

class OtpValidate extends Component {

    state={
        change:false
    }


    submitForm=(event)=>
    {
        event.preventDefault();
        Axios.post("http://localhost:8081/code/"+event.target.password.value)
        .then(respose=>
            {console.log(respose.data)
            if (respose.data)
            {
                const data={
                    email: this.props.user,
                    password:this.props.password
                  }

                  this.setState({change:true})
        
                Axios.post("http://localhost:8080/makeaccount",data)
                .then(r=>console.log(r.data))

            }
            else{
                alert("wrong OTP, try again")
            }
            })

    }
   
    
  render() {

    let body="";
    if(this.state.change)
    {
        body=<div>
            <h1>Account made Successfully</h1>
            <h2>Please Login</h2>
            <br/>
            
        </div>
    }
    else{
        body=<form onSubmit={this.submitForm}>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter OTP"
          name="password"
          required
        />
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    }
      
     
    
      console.log(this.props.user)



    // Axios.post("http://localhost:8081/sendmail",data)
    return (
      <React.Fragment>
          {body}
        
      </React.Fragment>
    );
  }
}

export default OtpValidate;
