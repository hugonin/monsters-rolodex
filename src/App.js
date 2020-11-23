import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Footer } from './components/footer/footer.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  /* An arrow function is used for handleChange because it's not a part of React (i.e. render(), componentDidMount())*/

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />       
        <CardList monsters={filteredMonsters} />
        <Footer />
      </div>
    );
  }
 
}

export default App;
