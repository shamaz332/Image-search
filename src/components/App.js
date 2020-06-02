import React, { Component } from "react";
import SearchBar from "./searchBar";
import "./App.css";


onSearchSubmit(term)
{

}

class App extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
