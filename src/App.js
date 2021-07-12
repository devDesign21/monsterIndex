import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {CardList} from  './components/card-list/cardList.jsx';
import {SearchBox} from  './components/searchBox/searchBox.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters : users}));;

  }

  onSearchChange = event => {

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Index</h1>
        <SearchBox 
          placeholder = 'search monsters'
          handleChange = {this.handleChange}
        />
        <CardList monsters = {filteredMonster}/> 
      </div>
    );
  }
}



export default App;
