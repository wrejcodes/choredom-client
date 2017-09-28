import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-main">
          <Main />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
