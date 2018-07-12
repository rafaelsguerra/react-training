import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id:'feuhea', name: 'Rafael', age:24},
      { id:'ohfeuf', name: 'Chico', age:22},
      { id:'ifheeg', name: 'Cintra', age:22}
    ],
    showpersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
     const personIndex = this.state.persons.findIndex(p => {
       return p.id === id;
     });

     const person = {
         ...this.state.persons[personIndex]
     };

     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;

    this.setState({persons:persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showpersons;
    this.setState({showpersons: !doesShow});

  }

  render() {
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
      }
    };

    let persons = null;

    if (this.state.showpersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
        classes.push('red');
    }
    if (this.state.persons.length <= 1) {
        classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className='App'>
        <h1>Hi, Im a react app!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
