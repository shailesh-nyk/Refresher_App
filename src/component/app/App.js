import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
import './App.scss';
import  Login  from './login/login'
import Options from './questions/options'

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
        page : -1
     }
  }
  render() {
    if(this.state.page === -1) {
        setTimeout(()=> {
          this.setState({
            page : 0
          })
        }, 1000)
        return (
          <div>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Loading...
                </p>
              </header>
            </div>
          </div>
        );
    } else if(this.state.page === 0) {
      return (
          <div className="App">
            <Login onLogin={() => this.goToPage2()}/>
          </div>
      );
    } else {
      return (
        <div className="App">
           <Options goToLogin={() => this.goToLogin()}/>
        </div>
    );
    }
  }
  goToPage2() {
      this.setState({
        page : 1
      })
  }
  goToLogin() {
    this.setState({
      page : 0
    })
  }
}

export default App;
