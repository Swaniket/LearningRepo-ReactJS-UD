// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component{
  state = {
    username: 'Rohan'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render(){
    return(
      <div>
        <UserInput 
        changed = {this.usernameChangedHandler}
        currentName = {this.state.username} />

        <UserOutput userName = {this.state.username}/>
        <UserOutput userName = {this.state.username}/>
        <UserOutput userName = 'Ron'/>
      </div>
        
      )
  }
}

export default App;
