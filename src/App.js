import './App.css';
import './styles.css';
import React from 'react';
import Roleselectscreen from './components/Roleselectscreen';
import Djscreen from './components/Djscreen';
import Viewerscreen from './components/Viewerscreen';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      chathistory: [],
      sessionID: "" 
    }
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className='fullscreen'>
        <Routes>
          <Route path='/' element={<Roleselectscreen/>}></Route>
          <Route path='/djscreen' element={<Djscreen chathistory = {this.state.chathistory} sessionID={this.state.sessionID} handler={this.setState}/>}></Route>
          <Route path='/Viewerscreen' element={<Viewerscreen chathistory = {this.state.chathistory} sessionID={this.state.sessionID} handler={this.setState}/>}></Route>
        </Routes>
      </div>
      </Router>
    )
  }
}


