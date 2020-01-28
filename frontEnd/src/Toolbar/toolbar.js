import React,{component, Component} from 'react';
import "./toolbar.css"
import { Link } from 'react-router-dom';

class Toolbar extends Component{

    render(){
        return(
            <div className="top">
                <Link to="/" >
                <button className="btn btn-primary btn-lg active pos">Home</button>
                </Link>
                <Link to="/todosList">
                <button className="btn btn-secondary btn-lg active position1 pos">Todos</button>
                </Link>
                <Link to="/login">
                <button className="btn btn-secondary btn-lg active position pos">Login</button>
                </Link>
            </div>
        )
    }


}

export default Toolbar;
