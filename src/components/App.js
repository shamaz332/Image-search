import React, { Component } from 'react';
import SearchBar from './searchBar'

import "./App.css"
class App extends Component {
  
  render() {
    return (
      <div className="ui container" style={{marginTop:"20px"}}>
        <SearchBar/>
      </div>
    );
  }
}

export default App;