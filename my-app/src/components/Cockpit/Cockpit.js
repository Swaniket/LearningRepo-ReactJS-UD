import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue; 
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  } 
`

const cokcpit = (props) => {

    let classes = []
    if (props.persons.length <= 2) {
      classes.push('red')
    }
    if (props.persons.length <= 1) {
      classes.push('bold')
    }

    return (
        <div>
            <h1 className = "App">Hi, I'm a React App</h1>
            <p className = {classes.join(' ')}>I guess this is the final time</p>
            <StyledButton alt = {props.showPerson} onClick = {props.clicked}>Toggle Name</StyledButton>
        </div>
    )    
}

export default cokcpit;