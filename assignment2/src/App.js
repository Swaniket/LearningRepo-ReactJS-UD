import './App.css';
import { Component } from 'react'
import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent'

class App extends Component{
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})

  }

  charDeleteHandler = (index) => {
    const text = this.state.userInput.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({userInput: updatedText})

  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent 
        character = {ch} 
        key = {index}
        click = {() => this.charDeleteHandler(index)}/>
    })

    return (
      <div className = 'App'>
        <input type="text" 
          onChange = {this.inputChangedHandler} 
          value = {this.state.userInput}/>
        <p>{this.state.userInput}</p>

        <Validation textLength = {this.state.userInput.length} />

        {charList}
      </div>
      
    )
  }
}

export default App;
