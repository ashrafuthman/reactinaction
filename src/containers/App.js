import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        persons: [
          { id: 'asfa1', name: 'Max', age: 28 },
          { id: 'vasdf1', name: 'Manu', age: 29 },
          { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
      otherState: 'some other value',
      showPersons: false
    }
    console.log('[App.js] Inside constructor', props);
  }
 
  componentWillMount () {
    console.log('[App.js] Inside componentWillMount');
  }
  
  componentDidMount () {
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate ( nextProps, nextState ) {
  //   console.log('[UPDATE Person.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return true;
  // }
  

  componentWillUpdate ( nextProps, nextState ) {
   console.log('[UPDATE Person.js] Inside componentWillUpdate', nextProps, nextState);

  }
  

  componentDidUpdate(nextProps, nextState) {
   console.log('[UPDATE Person.js] Inside componentDidUpdate', nextProps, nextState);
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log('[App.js] Inside render');
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>
        );

      }



    return (
        <div className={classes.App}>
        <button onClick={()=>{this.setState({showPersons: true})}}>Show persons</button>
        <Cockpit
        appTitle={this.props.appTitle}
         showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
   
  }
}

export default App;
          
//The Demo App is complerte :)