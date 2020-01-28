import React,{Component} from 'react';
import Toolbar from "./Toolbar/toolbar"
import Bottom from "./Bottom/Bottom"
import Home from './MainBody/Home/Home'

import { BrowserRouter } from 'react-router-dom'
import MainBody from "./MainBody/MainBody"

import './App.css';

class App extends Component {
  
  
  render(){
  return (

    <BrowserRouter>
    <div >
      <Toolbar></Toolbar>
      <MainBody></MainBody>
      
      
      <Bottom></Bottom>
      
      
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
