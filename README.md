# Installation

## Build Workflow: 
#### Dependency Management Tool- 
- *npm or yarn*

#### Bundler- 
- *Webpack*

#### Compiler- 
- *Babel + Presets*

## Creating React Project: 
#### Official Docs- https://reactjs.org/docs/create-a-new-react-app.html

**Note- Install NodeJS first**

- ```npm install -g create-react-app```
- ```npx create-react-app my-app```
- ```cd my-app/```
- ```npm start```

# ReactJS Basics:-

### Important Notes: 
- Component should start with a **upper-case letter** & function and class names should start with **small letters.**
- Using the ES6 function declaration, i.e, Arrow function.
- When we **import a component** in the main **App.js** that should **start with a upper case.** Beause, the lowercase characters are reserved for JSX components in react.
- Custom components can be written in 2 ways: 
  - ```<></>```
  - Or more mordern ```< />```
- React Updates when either **state or props** changes.

### Components Basics:

- A component is just a function that returns some JSX(HTML).
- Components are of two types:
  - Functional Components
  - Class Components
- Every React component needs to have a render method to render components into the HTML. 
- Components are reusable & configurable.
- We need to import React to use the JSX code.
- We need to export the class as ```default export``` inorder to import it later as an components

### JSX:

- class => className
- for => htmlFor
- **camelCase** property naming convension.
  - onclick => onClick
  - tabindex => tabIndex
- The return() method must have 1 root element. Best practice is wrap everything in 1 <div></div> element.
- To use JavaScript inside of JSX, we need to wrap it with ```{}```
- Within ```{}``` we can call a function, call a variable, write some simple logic, but we can't define class or function.

### Props:

- Stands for property.
- Allows to pass variables or configurations to our components for a more dynamic behaviour.
- Using props:
  - In functional components, props will be passed in as **argument to the respective function** and will be used in JSX as **{props.argName}**
  - When using class-based components, we will have to use ```{this.props.argName}```
- Using props children:
  - Props childern are passed between the opening & the closing tags. ```<>This is the children</>```
  - To access this we will simple use ```{props.children}```
  - This need not to be text, we can pass **Complex HTML elements, i.e, Unordered list, maybe other react components.**
  - Change to a prop will trigger UI Update
  
 ### State:
 
- States are used when you want to **get some information from the inside of the component & change it.**
- States are available both in class based component & functional components(by using hooks).
- We will only use state when it's needed, because in complex applications it makes the class/function unpredictable in some cases.
- In state, the properties are passed from outside.
- ```state``` is a reserved word. We initialize it as a JS object
- In the state object we define array of properties.
- In the class components, we can access the state property by using ```{this.state.propertyName.attributename[index]}```
- Unlike states, change in states will also trigger UI updates. 

### State & onClick(Class-based-component):

- ReactJS supported Events: https://reactjs.org/docs/events.html#supported-events

- In the button onClick we usually **executes a function of the class in the ```{}```**
- The function name tipically is of this type: **switchNameHandler**
- Calling the function: ```onClick = {this.switchNameHandler}```
- To change the state
  - **DON'T** do this: ```this.state.persons[0].name = 'Pritha'```
  - Instead use the ```setState()``` method provided in the ```{ Component }``` object- 
      ```
      this.setState({
          persons: [
            {name: 'Pritha', age: 27},
          ]
        })
      ```
- The ```setState()``` will look at the **old property & the new propery to look for updates & update that.** It will **not** touch any other states.

### State in Functional Components(via React Hooks):

- Basically react hooks are a bunch of functions exposed to you that you can use in functional components
- All the hooks start with a ```use``` keyword.
- Import ```useState``` via- 
  ```import {useState} from 'react'```
- ```useState``` allows us to manage state in a functional component.
- ```useState``` returns an array of exactly 2 elements.
  - The first element will be **our current state**
  - The 2nd element will be a **function that allows us to update the state** such that react is aware of it and will re-render the HTML component.
- Setting up the hook with mentioned parameters:
```
const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Bukan', age: 27},
      {name: 'Buro', age: 23},
    ],
  })
  ```
- Setting up the updater function: 
```
const switchNameHandler = () => {
    setPersonsState({
          persons: [
            {name: 'Pritha', age: 27},
            {name: 'Swaniket', age: 23},
          ]
        })
      }
 ```
 - **Note-** When using hook, the updated state **doesn't merge with the old state, rather it replaces the old state.** That means, you will have to manually update the old set data
 - In the class based component, we have only 1 state component to work with, but in hooks, we can have multiple states calls.  
 
 ### Stateful VS Stateless component:
 
 - A stateful component(also known as smart, container components) is when a component manages state, maybe using the state hook, or as in a more traditional class based state property
 - The component which has no internal state management, is known as stateless component(also known as dumb, as they have no internal logic.).
 - It's a good idea to create as much as stateless components as possible because it makes the app easily maintanable. 
 
 ### Passing state handler method reference between components:
 
 - You can pass **state handler method reference** between components using the **props.** It allows to **change the data in the parent component** without having a direct access to it.
 - Just define a new prop with the function reference: 
  ```
  click = {this.switchNameHandler}
  ```
 - Call that reference via props in the desired component: 
 ```
 onClick = {props.click}
 ```
 - We can also pass parameters from outside of ```switchNameHandler```
 - Then the function would look something like this: 
 ```
   switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 27},
        {name: 'Swaniket', age: 23},
      ]
    })
  }
  ```
  - And the reference call will look something like this: 
  ```
  onClick = {this.switchNameHandler.bind(this, 'Pritha')}
  ```
 - We can also change the reference call to be **executed as an arrow function** as a function call, where you **can pass the parameters**. Here's how: 
 ```
 onClick = {() => this.switchNameHandler('Pritha!')}
 ```
 - The 2nd syntax is good an it works great but at times it can be a little inefficient, cause react may do this kinda function calls to often
 
 ### Stateful vs Stateless component:
 
 - Either you are creating a component with a **class** keyword or a **functional component**, If you are managing state in it, eithr with a **state** property and a ```.setState()``` , or with a react ```useState()```  hook, you can classify your component in stateful and stateless components.
 - A **stateful/container/smart** component is what manages a state. 
 - A component which has **no internal state management** is called stateless component.
 - It's a good practice to have as many **stateless/dumb/presentational** components as possible. 
 
 ### Two way binding: 
 
 - Suppose we want to change the name via custom user input. For that we need to add a property ```onChange```  in the input HTML.
 - ```onChange``` detects the change when the input is changed, the change property we can pass from the App.js, Like this
 ```
 <input type="text" onChange = {props.changed}/>
 ```
 - The we can make a new state updater called ```nameChangeHandler``` - 
 ```
 nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "ABC", age: 27},
        {name: event.target.value, age: 23},
      ]
    })
  }
  ```
  - Now we can pass this function to a component via props: 
  ```
  changed = {this.nameChangedHandler}
  ```
  - To add a two way binding, we simply add a value property with the current value of the name(This will raise a false alarm in the console): 
  ```
  <input type="text" onChange = {props.changed} value = {props.name}/>
  ```
  
 ### Rendering Dynamic Content(using Ternery Operation): 
  
  - Suppose we want to render some HTML within some certain conditions. We can wrap the whole HTML in a div tag & maybe we can use a method ```togglePersonHandler``` to handle the logic.
  - So the button should look like:
  ```
  <button onClick = {this.togglePersonHandler}> Toggle Name </button>
  ```
  
- In the inital state we can declare a ```showPerson``` flag:
```
state = {
    persons: [
      {name: 'Bukan', age: 27},
      {name: 'Buro', age: 23},
      {name: 'Ronu', age: 22},

    ],
    otherState: 'Some other value',
    showPerson: false
  }
```
- Then we need to wrap the HTML content inside ```{}``` to write some JS codes in it and we can use an ternery expression to check for the flag in state: 
```
this.state.showPerson ? </> :null
```
It means when the condition will be true the HTML will be rendered & **null** will be rendered when it is false. As by default we've declared the flag as false, so nothing will render.
- So the code becomes: 
```
      { this.state.showPerson ? 
        <div> 
          <Person />
          <Person />
          <Person />
        </div> 
      : null }
```
- Lastly the logic of the handler becomes:
```
 togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({showPerson: !doesShow})
  }
```

### Another way to render dynamic content:

- When react decides to render something in the screen it executes the ```render()``` not only just the ```return()``` method. We can use that to make a more clear approch.
- Firstly we can declare a variable as ```let persons = null``` outside of the return method.
- Then we can simply write a conditional statement to check the if the```showPerson``` flag is true or false.
```
    let persons = null

    if (this.state.showPerson) {
      persons = (
      <div> 
      <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age} 
        click = {this.switchNameHandler.bind(this, 'Prith')}
        changed = {this.nameChangedHandler}>My hobby is: Photography</Person>
      
      <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}/>
      
      <Person
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
      </div> 
      )
    }
```
So, the ```persons``` variable is **null by default** or the mentioned JSX when ```showPerson``` is **true.**
- It's a more elegent way of outsoursing the check, therefore the core template of the app is clean. 

### Outputting Lists: 

- We handle lists with the default tools that JS gives up to work with lists.
- We will get the list items from the state where it's stored as JS objects
- We will use ```.map()``` function to convert JS objects into array.
- In the ```.map()``` function we will pass a function that will map every element of the object to a JSX format: 
```
      {this.state.persons.map(person => {
        return <Person 
        name = {person.name} 
        age = {person.age} /> 
      })}
```

### Removing from the list: 

- To remove firstly we have to create a ```deletePersonHandler``` where we will handle the logic of deleting: 
```
deletePersonHandler = (personIndex) => {
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({persons : persons})
  }
```
  - This approch works, but the problem is as we are **mutating the original state directly**, which can create an unpredictable nature of the app. That's why it's a good          practice to always make a copy of the object.
  - A simple solution is to call the ```.slice()``` method directly while storing the data. 
  - ```.slice()``` makes a new copy and then store it to the referance variable. 
  - Like this:
  ```
deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice()
  }
```
  - Or we can use an ES6 spread operator(We will have an new array with the object of the old array). This is more mordern & more preferable way of doing this: 
  ```
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons : persons})
  }
  ```
  
- Next in our person render statement, we need to add a prop for the ```click``` property
```
click = {() => this.deletePersonHandler(index)}
```

### All about the KEY prop:

- Key prop is an importaint property we should add when **rendering lists of data.**
- It's a **default property** that react expects to find on an element, no matter if it's a **custom component** or a **default HTML element** which you render through a list.
- This key prop helps react to update the list efficiently. 
- It allows to monitor which element changed and which didn't. It then re-renders that perticular element, not the whole list.
- When we will fetch the data from database, it will have an unique **ID** which we can use as a key in our react. But in our app, there is no ID in the state, So let's add one: 
```
state = {
    persons: [
      {id: '1', name: 'Bukan', age: 27},
      {id: '2', name: 'Buro', age: 23},
      {id: '3', name: 'Ronu', age: 22},

    ]
  }
```
- Then we can simply transfer the **ID** as ```key``` where the persons are being rendered: 
```
if (this.state.showPerson) {
      persons = (
      <div> 
      {this.state.persons.map((person, index) => {
        return <Person 
        click = {() => this.deletePersonHandler(index)}
        name = {person.name} 
        age = {person.age}
        key = {person.id} /> 
      })}
      </div> 
      )
    }
```

### Making the ```nameChangedHandler``` more mordern & dynamic: 

- For that we need to modify the render element a little bit to add a onClick event, as follows: 
```
if (this.state.showPerson) {
      persons = (
      <div> 
      {this.state.persons.map((person, index) => {
        return <Person 
        click = {() => this.deletePersonHandler(index)}
        name = {person.name} 
        age = {person.age}
        key = {person.id}
        changed = {(event) => this.nameChangedHandler(event, person.id)} /> 
      })}
      </div> 
      )
    }
```
- Now for the dynamic name changed handler(passed additional ID for updation of name of that perticular person field):
```
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
```
- To render a list, use a ```.map()``` operator. Map not only gives you the element, but also the index in which you are operating.


# Styling React:-


### Change Component Styling Dynamically:

- Let's change the color of the button **Toggle Persons** to **green** when we want to show persons & to **red** when we want to hide the persons.
- For that We can simply use the default inline styles that was defined to use as ```style``` variable to represent the before click styling. 
- And after the dynamic render call, we can just change the ```backgroundColor``` property to red: 
```
if (this.state.showPerson) {
      persons = (
      <div> 
      {this.state.persons.map((person, index) => {
        return <Person 
        click = {() => this.deletePersonHandler(index)}
        name = {person.name} 
        age = {person.age}
        key = {person.id}
        changed = {(event) => this.nameChangedHandler(event, person.id)} /> 
      })}
      </div> 
      )
      style.backgroundColor = 'red'
    }
```

### Change CSS Classnames Dynamically: 

- Maybe I want to change the classname dynamically depending on the number of person in the person's state.
- For two or less elements, turn it **Red**
- For one & less, **red and bold.**
- To make these changes, we have to create 2 classes in our ```App.css``` as follows: 
```
.red {
  color: red;
}

.bold {
  font-weight: bold;
```
- One way of doing that is to create a variable with the classnames as strings: 
```
var classes = ['red', 'bold'].join('')
```
- This will result it to be red & bold in all of the cases, which is not what we want.
- Let's add some dynamic nature to it: 
```
    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
```
- Now apply this dynamic class to the desired element: 
```
<p className = {classes.join(' ')}>I guess this is the final time</p>
```

### Using Pseudo Selectors & Media Query in JS inline styles(Radium):

- This is not possible by default, but we can use a 3rd party package called **Radium**
- To install Radium, simply use this comment: 
```
npm install --save radium
```
- Radium allows us to use Pseudo Selectors & Media Query with inline styles. 
- To use radium, we need to import it as: 
```
import Radium from 'radium'
```
- And, change the export statement a little bit: 
```
export default Radium(App);
```
- This is called a **Higher-Order-Component.** It's just a component wrapping your component, adding some extra functionality. You can use this both **class base & functional components.**
- Now, simply we need to add a hover style in our inline styles: 
```
':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }, 
```
- And to update the styles dynamically: 
```
style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black',
      } 
```

### Using Radium with media queries:

- While wrapping the components with Radium is enough for Pseudo Selectors, but it's not enough for transforming selectors, i.e, media queries or animations with keyframes.
- For them we need to wrap the App component with **StyleRoot**
- So the import statement should become: 
```
import Radium, { StyleRoot } from 'radium'
```
- Now to use style root or such advanced features like this, we need to go to the **return statement & wrap it with StyleRoot:**
```
return (
      <StyleRoot>
        <div className = 'App'>
        <h1 className = "App">Hi, I'm a React App</h1>
        <p className = {classes.join(' ')}>I guess this is the final time</p>
        <button 
          style = {style}
          onClick = {this.togglePersonHandler}>Switch Name</button>

        {persons}
      </div>
      </StyleRoot>
    );
```

### Using Styled Components:

- Official Website: https://styled-components.com/
- To install ```npm install --save styled-components```
- Import: ```import styled from 'styled-components'```
- Base syntax: 
```
const Button = styled.button``
```
here ```button``` is a function call on the ```styled``` object with tagged template literal ```'``'```
- All the function calls with have a ```'``'``` at the end.
- Within ```'``'``` (tagged template literal) you can **pass in text which is then passed on the button method** in a special way.
- The ```styled-components``` that we are importing basically have all of the HTML methods that we can create in it.
- We will have to use the **styled components as regular react components**, because **every method provided by the styled object** (It maybe div, h1, p etc.) returns a **react component.**
- Let's use this method call to style some components: 
```
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px; 
    }
`
```
- And to use this, we will have to wrap our elements in the provided component:
```
return(
        // <div className = 'Person' style = {style}>
        <StyledDiv>
            <p onClick = {props.click}>My name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value = {props.name}/>
        </StyledDiv>
    )
```
- Now if you inspect the styled-components in the application, you will see that some strange CSS class is assigned with the div components, which we didn't defined.
- These divs are the output of the ```'styled.div``'``` method. 
- The styles are declared through styled-component are not stored as inline styles, they are stored in the header as regular CSS property.
- You can ofcourse **store** your style component in **different files** & **reuse them in multiple files.**
- One thing to keep in mind that we need to use **regular CSS syntax inside of styled components.** 

### Styled Components & Dynamic Styles:

- In our main **App.js** file, the button styling can be rewritten using styled-component in the following way:
```
const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue; 
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
    color: black;
  } 
`
```
- Now we have to use this ```styledButton``` attribute in place of our regular button to apply the styles: 
```
<StyledButton onClick = {this.togglePersonHandler}>Toggle Name</StyledButton>
```
- Now, our button also have some dynamic CSS styling, when we were showing persons, then the background color of the button should change to **red**, and it had some hover style.
- To use dynamic styling (We wanna change some styles base on some cercumstances outside of the component) in styled-components, we can pass a prop in ```StyledButton``` for that: 
```
alt = {this.state.showPerson}
```
- Now only we will have to use the ```alt``` prop inside of the ```StyledButton``` component. We can render styles dynamically if our ```props.alt``` is true or false. So in our styled-component: 
```
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
```
