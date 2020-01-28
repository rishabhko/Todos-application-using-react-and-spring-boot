import React from 'react';
import {Link} from 'react-router-dom'
import "./Home.css"


const home=(props)=>{
    return(
    <div className="wrapper">
        <h1 className="homePage">Welcome to the todo app </h1>
        <Link to="/todosList">
        <button className="btn btn-secondary btn-lg">Show my Todos</button>
        </Link>
    </div>
    )
    
}
export default home;