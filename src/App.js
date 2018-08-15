import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
     {name: 'Max', age: 28},
     {name: 'Ashraf', age: 23},
     {name: 'Stephanie', age: 29}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
   // console.log('Was clicked');
    this.setState( {
     person: [
      {name: newName, age: 29},
      {name: 'Ashraf', age: 24},
      {name: 'Stephanie', age: 30}
    ]
  } )
 }

  changeName = (event) => {
   // console.log('Was clicked');
    this.setState( {
     person: [
      {name: 'Max', age: 29},
      {name: 'Ashraf', age: 24},
      {name: event.target.value, age: 30}
    ]
  } )
 }
 togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow})

 }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
   let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
            <Person
             name={this.state.person[0].name}
             age={this.state.person[0].age}
             />
            <Person name={
              this.state.person[1].name}
               age={this.state.person[1].age}
               click={this.switchNameHandler.bind(this, 'Max!')}>My hobby is cookings</Person>
            <Person
             name={this.state.person[2].name}
              age={this.state.person[2].age}
              changed={this.changeName}
            />
          </div> 
          )
    }

    return (
      <div className="App">
        <h1>Hello from React</h1>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Switch Names</button>
      {persons}
      </div> 
      
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1'), null, "Hello from React");
  }
}

export default App;

