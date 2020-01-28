import React,{ Component } from "react";
import {Route} from 'react-router-dom'
import Home from './Home/Home'
import TodoList from "./TodosList/TodosList";
import Login from "./Login/Login";
import SignUp from './Login/SignUp'
import AddTodo from './TodosList/Todos/AddTodo/AddTodo'
import OtpValidate from './Login/OtpValidate'

class MainBody extends Component{

    state={
        loggedIn:false,
        user:null,
        password:null
    }

     changeStateHandler=(yes,email,password)=>{
         
         this.setState({loggedIn:yes,user:email,password:password})
         

    }
    logoutStateHandler=()=>{
       
        this.setState({loggedIn:false})

   }

    render(){
        
        
        return(<div >

            <Route path="/" exact component={Home}/>
            <Route path="/todosList" render={(props)=><TodoList logged={this.state.loggedIn} user={this.state.user}></TodoList>}                         ></Route>
            <Route path="/login" render={(props)=><Login click={this.changeStateHandler} loggedIn={this.state.loggedIn} logOut={this.logoutStateHandler} ></Login>} ></Route>
            <Route path="/signup" render={(props)=><SignUp click={this.changeStateHandler} user={this.state.user} ></SignUp>}></Route>
            <Route path="/otpValidate" render={(props)=><OtpValidate user={this.state.user} password={this.state.password} ></OtpValidate>} ></Route>

            <Route path="/addTodo" render={(props)=><AddTodo email={this.state.user} ></AddTodo>} ></Route>


        </div>) 
    }
} 

export default MainBody