import React, { Component } from 'react'
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Bukan', age: 27},
      {id: '2', name: 'Buro', age: 23},
      {id: '3', name: 'Ronu', age: 22},
    ],

    otherState: 'Some other value',
    showPerson: false,
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons : persons})
  }


  nameChangedHandler = (event, id) => {
    // To make sure that the it's being executed for the person intendent
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    // To make sure it doesn't mutate the original person state(spred operator)
    const person = {...this.state.persons[personIndex]}
    
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({showPerson: !doesShow})
  }


  render(){
    let persons = null

    if (this.state.showPerson) {
      persons = (
        <Persons 
          persons = {this.state.persons} 
          clicked = {this.deletePersonHandler} 
          changed = {this.nameChangedHandler}/>
      )
    }

    return (
      <div className = 'App'>
        <Cockpit showPerson = {this.state.showPersons} persons = {this.state.persons} clicked = {this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
