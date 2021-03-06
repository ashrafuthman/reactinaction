import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor (props) {
    super(props)
    console.log("Hello from Persons.js");
    console.log('[Persons.js] Inside constructor');
  }

  componentWillMount () {
    console.log('[Persons.js] Inside componentWillMount');
  }
  
  componentDidMount () {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps ( nextProps ) {
  	console.log('[UPDATE Person.js] Inside componentWillRecieveProps', nextProps );
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
  

  render() {

  	console.log('[Persons.js] Inside render');

    return this.props.persons.map( ( person, index ) => {
    return <Person
      click={() => this.props.clicked( index )}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={( event ) => this.props.changed( event, person.id )} />
    });
  }
}

export default Persons;
