import React, { Component } from 'react';

import SignUp from './SignUp';





class App extends Component {



  render() {


    return (
      <div className="container">
        <div className="row justify-content-center mt-4 mb-5">
          <h1>Welcome Wilder ! </h1>
        </div>
        <div className="row">
          <SignUp />
        </div>
      </div>
    );
  }
}

export default App;
