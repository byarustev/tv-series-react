import React, { Component } from 'react';
import './App.css';
import Intro from "../intro/intro";
import Series from "../../containers/series/series";

import 'whatwg-fetch'
import Main from "../main/main";
class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Tv series</h1>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
