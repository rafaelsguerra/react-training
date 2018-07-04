import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Rafael', age:24},
      {name: 'Chico', age:22},
      {name: 'Cintra', age:22}
    ],
    showpersons: false
  }

  switchNamehandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age:500},
        {name: 'Xiok', age:2424},
        {name: 'Cintrololo', age:0}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Rafael', age:24},
        {name: event.target.value, age:22},
        {name: 'Cintrololo', age:22}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showpersons;
    this.setState({showpersons: !doesShow});

  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showpersons) {
      persons = (
          <div>
            {this.state.persons.map(person => {
              return <Person
                name={person.name}
                age={person.age}/>
            })}
          </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, Im a react app!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
