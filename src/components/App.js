import React, { Component } from "react";
import SplashApi from '../components/api/unSplash'
import SearchBar from "./searchBar";
import "./App.css";

class App extends Component {

  state = {
    images : []
  }

  onSearchSubmit = async (term)=> {
    const res = await SplashApi.get("/search/photos", {
      params:{
        query:term
      },
    }
    );
this.setState({images:res.data.results})
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
Found : {this.state.images.length}
      </div>
    );
  }
}

export default App;
